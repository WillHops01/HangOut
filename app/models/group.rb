# == Schema Information
#
# Table name: groups
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#  creator_id  :integer          not null
#  long        :float            not null
#  lat         :float            not null
#  private     :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  image_link  :string
#

class Group < ApplicationRecord

  belongs_to :creator,
    class_name: :User,
    foreign_key: :creator_id,
    primary_key: :id

  has_many :members,
    class_name: :Member,
    foreign_key: :group_id,
    primary_key: :id

  has_many :users,
    through: :members,
    source: :user
end
