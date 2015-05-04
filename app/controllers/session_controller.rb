class SessionController < ApplicationController

  #login form
  def new
    if logged_in?
      redirect_to '/'
    end
  end

  #logging in
  def create
    @user = User.where(email: params[:email])[0]

    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to '/'
    else
      render :new
    end
  end

  # logging out 
  def destroy
    session[:user_id] = nil
    redirect_to '/'
  end

end
