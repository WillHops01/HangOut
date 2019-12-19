class Api::MembersController < ApplicationController

    def create        
        @user = User.find(params[:member][:userid])        
        @group = Group.find(params[:member][:groupid])  
        @member = Member.new(user: @user, group: @group)        
        if @member.save
            #need to update group and current
            render :show
        else
            render json: ["User is already a member of this group"], status: 401
        end
    end

    def destroy
        debugger
        @user = current_user
        # @group = Group.find(params[:member][:groupid])  
        @member = @user.memberships.find_by(group_id: params[:id])
        debugger
        render :show
    end
end