json.extract! group, :id, :name, :description, :long, :lat, :image_link
json.member_count group.users.length
json.creator_name group.creator.username
json.member_list group.users.ids