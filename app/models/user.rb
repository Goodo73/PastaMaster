class User < ActiveRecord::Base

	has_secure_password

	has_many :favourites
	has_many :recipes, :through => :favourites

	has_many :comments
	has_many :recipes, :through => :comments

end
