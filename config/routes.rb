Rails.application.routes.draw do
  resources :health, only: [ :index ]
  resources :portfolio, only: [ :index ]
  resources :posts, only: [ :index, :create ]
  resources :synergies, only: [ :index ]
  root to: 'posts#index'

  resources :ingredients, only: [ :index, :create, :update, :destroy ]
end
