# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
[
  { name: 'vanilla' },
  { name: 'lime' },
  { name: 'lemon' },
  { name: 'chocolate' }
].each do |attributes|
  Ingredient.find_or_create_by(attributes)
end

[
  { name: 'vanilla', combinable: ['lemon'] },
  { name: 'lime', combinable: ['lemon'] },
  { name: 'lemon', combinable: [] },
  { name: 'chocolate', combinable: ['vanilla'] }
].each do |attributes|
  first = Ingredient.find_by(name: attributes[:name])
  attributes[:combinable].each do |name|
    second = Ingredient.find_by(name: name)
    Combination.create(first_ingredient: first, second_ingredient: second)
  end
end