@groups.each do |group|
  json.set! group.id do    
    json.partial! 'group', group: group 
  end
end

# if logged_in?
#   json.current_user_groups current_user.groups.pluck(:id)
  
#   #current_user.groups.map{|group| group.id }
# end