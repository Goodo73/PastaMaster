class ApiController < ApplicationController

  def seed
  # here you retrieve data from Weeatt API and post to our DB
  end

  def addRecipe
  # actions data posting to DB
    params['results'].each do |recipe|
      r = Recipe.create()
      r.title = recipe[1]['name']
    #   r.image_url = recipe[1]['images']
      r.description = recipe[1]['description']
      r.method = recipe[1]['instructions']
      r.ingredients = recipe[1]['ingredients']
      r.cook_time = 20
      r.nbr_times_cooked = 50
      r.user_rating = 3.5
      r.save
    end
    # binding.pry

    redirect_to '/'
  end

  def search
    # params for search filters
  end

  def recipe
    # params[:id]
  end


end

# get images working
# add check for duplicates;
# consider method for cook_time
# consider method for nbr_times_cooked
# consider method for user rating

# filter for relevant recipes at some point