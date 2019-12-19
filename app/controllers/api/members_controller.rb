class Api::MembersController < ApplicationController

    def create
        debugger
        user = params[:member][:userid]
        group = params[:member][:groupid]

        @member = Member.new

    end
end