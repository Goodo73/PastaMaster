class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception



  # ------------- Authentication ------------- 
  def logged_in?
    !!current_user
  end
  helper_method :logged_in? #allows the helper method to be used in views

  def current_user
    User.find_by(id: session[:user_id])
  end
  helper_method :current_user
  # ------------------------------------------ 


end
