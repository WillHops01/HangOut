json.current_user_groups current_user.groups.pluck(:id)

json.group do
  json.partial! './api/groups/group', group: @group 
end