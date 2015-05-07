class SessionController < ApplicationController

  #login form
  def new
    if logged_in?
      redirect_to root_path

      
    end
  end

  #logging in
  def create
    @user = User.find_by(email: params[:session][:email])

    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      # redirect_to root_path
      render :json => { msg: [0, '']}
    else
      render :json => { msg: [1,'Invalid email and/or password. Please try again.']}
    end
  end

  # logging out 
  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

end
