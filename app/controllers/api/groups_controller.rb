class Api::GroupsController < ApplicationController

  def index
    @groups = Group.all
    render :index
  end
end
