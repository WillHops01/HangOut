json.extract! user, :username, :id, :long, :lat, :email, :profile_image_link
json.current_user_groups user.groups.pluck(:id)
#json.current_user_groups user.groups.pluck(:id)

