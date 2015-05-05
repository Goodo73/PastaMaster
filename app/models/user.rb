class User < ActiveRecord::Base

  has_secure_password

  # Email validation
  validates :email, :presence => true, :uniqueness => true
  validates_format_of :email, :with => /@/

  # Password validation
  validates :password, confirmation: true
  validates_length_of :password, :in => 6..20, :on => :create
  
end

