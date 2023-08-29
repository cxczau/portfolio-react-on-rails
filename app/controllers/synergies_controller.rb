class SynergiesController < ApplicationController
  def index
    @ingredients = Ingredient.all
    return @ingredients unless request.format.json?
  end
end
