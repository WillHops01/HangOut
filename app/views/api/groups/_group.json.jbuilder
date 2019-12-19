json.extract! group, :id, :name, :description, :long, :lat, :image_link
json.member_count group.users.length
json.creator group.creator, :id, :username, :profile_image_link
json.member_list group.users.ids