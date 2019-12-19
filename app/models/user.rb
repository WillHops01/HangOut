# == Schema Information
#
# Table name: users
#
#  id                 :bigint           not null, primary key
#  username           :string           not null
#  email              :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  long               :float            not null
#  lat                :float            not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  profile_image_link :string
#

class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :password_digest, :long, :lat, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true
  attr_reader :password
  after_initialize :ensure_session_token, :set_defaults

  has_many :created_groups,
    class_name: :Group,
    foreign_key: :creator_id,
    primary_key: :id

  has_many :memberships,
    class_name: :Member,
    foreign_key: :user_id,
    primary_key: :id

  has_many :groups,
    through: :memberships,
    source: :group

  def set_defaults
    self.profile_image_link ||= "/Icons/profile_background.png"
  end

  def ensure_session_token
    self.session_token ||= self.reset_session_token!
  end

  def generate_session_token!
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = self.generate_session_token!
    self.save
    self.session_token
  end

  def password=(password)
    @password=password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
