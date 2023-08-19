class Ingredient < ApplicationRecord
  before_validation :prevalidate

  has_many :combinations, dependent: :destroy, foreign_key: :first_ingredient_id
  has_many :mixes, through: :combinations, source: :second_ingredient

  def name
    self[:name]&.titleize
  end

  def prevalidate
    self.name = name.downcase
  end
end
