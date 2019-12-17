@groups.each do |group|
  json.set! group.id do
    json.extract! group, :id, :name, :description, :long, :lat, :image_link
  end
end

if logged_in?
  json.current_user_groups current_user.groups.pluck(:id)
  
  #current_user.groups.map{|group| group.id }
end