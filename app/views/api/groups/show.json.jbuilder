json.group do
  json.partial! 'group', group: @group
  json.user_details @group.users, :username, :profile_image_link 
end