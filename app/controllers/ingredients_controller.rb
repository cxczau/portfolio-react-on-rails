# frozen_string_literal: true
require 'pry'

class IngredientsController < ApplicationController
  before_action :load_model, only: %i[update destroy]
  # TODO: selected ingredient
  # TODO: sort other ingredients by name and if they are a good pair

  # def index
  # def new
  # def create
  # def edit
  # def update
  # def show
  # def destroy

  def index
    @ingredients = Ingredient.all
    @selected_ingredient = Ingredient.first
  end

  def create
    ingredient = Ingredient.new(ingredient_params)
    if ingredient.save
      redirect_to ingredients_path
    end
  end

  def update
    ingredient = Ingredient.find_by(name: params[:name])
    if ingredient
      ingredient.update(ingredient_params)
      redirect_to ingredients_path
    else
      render :new
    end
  end

  def destroy
    @ingredient.destroy!
    flash[:notice] = 'Ingredient deleted!'
    redirect_to ingredients_path
  end

  def update_selected
    @selected_ingredient = @ingredients.find_by(id: params[:id])
  end

  private

  def load_model
    @ingredient = Ingredient.find(params[:id])
  end

  def ingredient_params
    params.require(:ingredient).permit(:name)
  end
end
