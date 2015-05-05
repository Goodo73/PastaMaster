class UsersController < ApplicationController  
  def new
    @user = User.new 
  end
  def create
    @errors = []
    @user = User.new
    @user.email = params[:user][:email]
    @user.password = params[:user][:password]
    p @user
    puts @user
    if @user.save
      flash[:notice] = "You signed up successfully"
      flash[:color]= "valid"
      redirect_to root_path
    else
      flash[:notice] = "Form is invalid"
      flash[:color]= "invalid"
      @errors = @user.errors.full_messages
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end

end

# class UsersController < ApplicationController

#   def new
#     @user = User.new
#   end

#   def create
    
#     @user = User.new

    
#     if @user.save
#       flash[:notice] = "You're signed up!"
#       flash[:color] = "valid"
#     else
#       flash[:notice] = "Form is invalid."
#       flash[:color] = "Invalid"
#     end
#       render :new
#   end

#   def edit
#     @user = User.find(params[:id])
#   end

#   def update
#     @user = User.find(params[:id])
#     @user.email = params[:user][:email]
#     @user.password = params[:user][:password]
#     if @user.save
#       redirect_to '/users/all'
#     else
#       render :edit
#     end
#   end

#   def destroy
#     @user = User.find(params[:id])  
#     @user.destroy
#     redirect_to '/users/all'
#   end

  

# end
