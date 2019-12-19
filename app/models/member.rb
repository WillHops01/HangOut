# == Schema Information
#
# Table name: members
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  group_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Member < ApplicationRecord
  validates_uniqueness_of :user_id, :scope => :group_id, :message => "User is already a member of this group"

  belongs_to :group

  belongs_to :user
end
