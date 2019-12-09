class App::UsersController < ApplicationController

  def create
    @user = User.new(new_user_params)
    if @user.save
      login!(@user)
      render :show
    else
    end
  end

  private
  def new_user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
