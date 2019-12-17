class Api::GroupsController < ApplicationController

  def index
    @groups = Group.all
    render :index
  end

  def show
    @group = Group.find(params[:id])

    if @group
      render :show
    else
      render json: ["group does not exist"], status: 404
    end
  end


end
