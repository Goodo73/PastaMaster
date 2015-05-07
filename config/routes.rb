Rails.application.routes.draw do


  get '/recipes/fullscreen' => 'recipes#fullscreen'
  # ------ Recipes routes ------
  resources :recipes
  # ----------------------------

  # ------ Users routes ------
  resources :users
  # --------------------------

  get '/' => 'recipes#index', :as => :root

  # ------ Authentication routes ------
  # /session/new       login form
  get '/login'     => 'session#new'
  # /session           logout
  delete '/logout' => 'session#destroy'
  # /session           after submit form for login
  post '/login'    => 'session#create'
  # ----------------------------------


  # ------ API routes ------
  # /api/seed                 retrieve data from weeatt api
  get '/api/seed'         => 'api#seed'
  # /api/add                  adds recipes to DB
  post '/api/add'         => 'api#addRecipe'
  # /api/list                 provide json search results
  get '/api/recipes/list' => 'api#list'
  # /api/recipe/:id           provide json recipe details
  get '/api/recipes/:id'  => 'api#show'
  # ------------------------


end