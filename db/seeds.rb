# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Creating a User
user = User.create email: 'lola@bone.com', password: '123456', password_confirmation: '123456'


apartments = [
    {
      id: 1,
      street: "Via Imprunetana",
      city: "Firenze",
      state: "IT",
      manager: "Beppe ",
      email: "beppe@gmail.com",
      price: "1000",
      bedrooms: 5,
      bathrooms: 2,
      pets: "yes",
      user_id: 1
    },

    {
      id: 2,
      
      street: "Rue Beau de Popis",
      city: "Paris",
      state: "France",
      manager: "Anne Lescaux",
      email: "hs@dounut.com",
      price: "5000",
      bedrooms: 3,
      bathrooms: 2,
      pets: "yes",
      user_id: 1
    },
    
    {
      id: 3,
      street: "3467 Adams Avenue",
      city: "San Diego",
      state: "California USA",
      manager: "Brandon Merr",
      email: "julesfan@2015.com",
      price: "2000",
      bedrooms: 6,
      bathrooms: 4,
      pets: "no",
      user_id: 2
    },

    {
      id: 4,
      street: "756 Prospect",
      city: "San Diego",
      state: "California USA",
      manager: "Brandon Merr",
      email: "julesfan@2015.com",
      price: "8000",
      bedrooms: 1,
      bathrooms: 4,
      pets: "no",
      user_id: 2
    }


  ]

  apartments.each do |attributes|
    Apartment.create attributes
    puts "creating apartments #{attributes}"
  end









#   # Seeds

# # Creating a User
# user = User.create email: 'sarah@test.com', password: '123456', password_confirmation: '123456'

# # Creating apartments
# apartments = [
#   {
#     street: '221B Baker Street',
#     city: 'London',
#     state: 'England',
#     manager: 'Ms. Hudson',
#     email: 'mzhud@email.com',
#     price: '1000',
#     bedrooms: 2,
#     bathrooms: 2,
#     pets: 'no',
#     user_id: user.id
#   },
#   {
#     street: '221A Baker Street',
#     city: 'London',
#     state: 'England',
#     manager: 'Ms. Hudson',
#     email: 'mzhud@email.com',
#     price: '1500',
#     bedrooms: 3,
#     bathrooms: 3,
#     pets: 'no',
#     user_id: user.id
#   }
# ]

# apartments.each do |attr|
#   Apartment.create attr
#   puts "creating apartment: #{attr}"
# end