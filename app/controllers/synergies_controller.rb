class SynergiesController < ApplicationController
  def index
    @ingredients = Ingredient.all
  end
end
