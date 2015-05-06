class SessionController < ApplicationController

  #login form
  def new
    if logged_in?
      redirect_to '/'

      
    end
  end

  #logging in
  def create
    @user = User.where(email: params[:session][:email])

    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      redirect_to root_path
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
