class Ingredient < ApplicationRecord
  before_validation :prevalidate

  def prevalidate
    self.name = name.capitalize
  end
end
