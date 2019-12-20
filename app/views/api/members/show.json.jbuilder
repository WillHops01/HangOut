# json.current_user_groups @user.groups.pluck(:id)

json.group do
  json.partial! './api/groups/group', group: @group 
  json.user_details @group.users, :username, :profile_image_link 
end

json.user do
  json.user_id @user.id
  json.current_user_groups @user.groups.pluck(:id)
end

