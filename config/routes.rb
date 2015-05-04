Rails.application.routes.draw do


  resources :recipes
  resources :users

  get '/' => 'recipes#index', :as => :root
  resources :users


  # ------ Authentication routes ------
  # /session/new     login form
  get '/login' => 'session#new'
  # /session         logout
  delete '/logout' => 'session#destroy'
  # /session         after submit form for login
  post '/login' => 'session#create'
  # ----------------------------------

end