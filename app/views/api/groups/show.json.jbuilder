json.set! @group.id do
  json.extract! group, :id, :name, :description, :long, :lat, :image_link
end