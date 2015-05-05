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


  # ------ API routes ------
  # /api/seed                retrieve data from weeatt api
  get '/api/seed'         => 'api#seed'
  # /api/add                 adds recipes to DB
  post '/api/add'         => 'api#addRecipe'
  # /api/list                provide json search results
  get '/api/recipes/list' => 'api#list'
  # /api/recipe/:id          provide json recipe details
  get '/api/recipes/:id'  => 'api#show'
  # ------------------------


end