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

  def create
    @group = Group.new(group_params)

    if @group.save
    else
    end
  end

  private
  def group_params(params)
    params.require(:group).permit(:name, :description)
  end


end
