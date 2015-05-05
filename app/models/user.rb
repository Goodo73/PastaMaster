class User < ActiveRecord::Base

	has_secure_password

	has_many :favourites
	has_many :recipes, :through => :favourites

	has_many :comments
	has_many :recipes, :through => :comments

  # attr_accessor :password
  # EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  # validates :email, :presence => true, :uniqueness => true#, :format => EMAIL_REGEX
  # validates :password, :confirmation => true #password_confirmation attr
  # validates_length_of :password, :in => 6..20, :on => :create

end

