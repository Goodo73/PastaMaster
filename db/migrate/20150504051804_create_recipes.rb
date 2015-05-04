class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :image_url
      t.text :description
      t.text :method
      t.text :ingredients
      t.float :cook_time
      t.integer :nbr_times_cooked
      t.integer :user_rating

      t.timestamps null: false
    end
  end
end
