json.partial! 'api/shared/user', user: @user

json.groups do
  @user.groups.each do |group|
    json.set! :id, group.id
    # json.set! group.id do
    #   json.extract! group, :id, :name, :description
    # end

  end
end