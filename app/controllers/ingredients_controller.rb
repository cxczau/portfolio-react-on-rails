# frozen_string_literal: true
require 'uri'
require 'net/http'

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

    if false
      url = URI("https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup")

      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = true

      request = Net::HTTP::Get.new(url)
      request["X-RapidAPI-Key"] = ENV['RAPID_API_KEY']
      request["X-RapidAPI-Host"] = 'tasty.p.rapidapi.com'

      response = http.request(request)
      puts response.read_body
    end
  end

  def create
    ingredient = Ingredient.new(ingredient_params)
    if ingredient.save
      flash[:notice] = 'Ingredient created!'
      redirect_to ingredients_path
    else
      flash[:alert] = "Ingredient error! #{ingredient.errors.full_messages.to_sentence}"
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
