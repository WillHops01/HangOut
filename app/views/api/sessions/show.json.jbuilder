json.partial! 'api/shared/user', user: @user

json.groups do
  @user.groups.each do |group|
    json.set! :id, group.id  
  end
end