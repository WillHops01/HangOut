json.partial! 'api/shared/user', user: @user

#json.current_user_groups @user.groups.pluck(:id)


# //json.membership_ids do
#  // @user.groups.each do |group|
#    // json.set! :id, group.id  
#   //end
# //end