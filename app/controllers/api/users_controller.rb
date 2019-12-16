class Api::UsersController < ApplicationController

  def create
    @user = User.new(new_user_params)
    @user.long = 100;
    @user.lat = 100;
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def new_user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
