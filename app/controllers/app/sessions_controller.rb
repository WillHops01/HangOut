class App::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      [:user][:username],
      [:user][:password]
    )

    if @user
      login(@user)
    else
    end
  end

  private
  def login_params
    params.require(:user).permit(:username, :password)
  end
end
