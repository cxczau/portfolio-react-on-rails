class Combination < ApplicationRecord
  belongs_to :first_ingredient, class_name: 'Ingredient'
  belongs_to :second_ingredient, class_name: 'Ingredient'

  def humanize
    "#{first_ingredient.name} + #{second_ingredient.name}: #{positive_rating} - #{negative_rating}"
  end
end
