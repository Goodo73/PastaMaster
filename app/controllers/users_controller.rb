class UsersController < ApplicationController

  def all
    @users = User.all
  end

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new
    @user.email = params[:user][:email]
    @user.password = params[:user][:password]
    if @user.save
      redirect_to '/users/all'
    else
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.email = params[:user][:email]
    @user.password = params[:user][:password]
    if @user.save
      redirect_to '/users/all'
    else
      render :edit
    end
  end

  def destroy
    @user = User.find(params[:id])  
    @user.destroy
    redirect_to '/users/all'
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
