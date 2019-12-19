class Api::MembersController < ApplicationController

    def create
        
        @user = User.find(params[:member][:userid])
        
        @group = Group.find(params[:member][:groupid])
        

        @member = Member.new(user: @user, group: @group)
        debugger
        if @member.save
            #need to update group and current
            render :show
        else
        end
    end
end