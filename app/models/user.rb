class User < ActiveRecord::Base

	has_secure_password

	has_many :favourites
	has_many :recipes, :through => :favourites

	has_many :comments
	has_many :recipes, :through => :comments

  # Email validation
  validates :email, :presence => true, :uniqueness => true
  validates_format_of :email, :with => /@/

  # Password validation
  validates :password, confirmation: true
  validates_length_of :password, :in => 6..20, :on => :create
  
end

