json.set! @group.id do
  json.extract! @group, :id, :name, :description, :long, :lat, :image_link
  json.member_count @group.users.count
end