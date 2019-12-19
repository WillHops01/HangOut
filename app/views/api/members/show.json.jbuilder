json.current_user_groups @user.groups.pluck(:id)

json.group do
  json.partial! './api/groups/group', group: @group 
end