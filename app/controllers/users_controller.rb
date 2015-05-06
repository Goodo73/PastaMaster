class UsersController < ApplicationController  
  
  def new
    @user = User.new 
  end

  def create
    @user = User.new
    @user.email = params[:user][:email]
    @user.password = params[:user][:password]

    if @user.save
      flash[:notice] = "You signed up successfully"
      flash[:color]= "valid"
      redirect_to root_path

    # Re-render new if User.save is unsuccessful
    else 
      flash[:notice] = "Form is invalid"
      flash[:color]= "invalid"

      @errors = @user.errors.full_messages
      render :new
    end
  end

  # Strong params
  def user_params
    params.require(:user).permit(:email, :password)
  end

end
