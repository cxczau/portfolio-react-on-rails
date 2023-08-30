Rails.application.routes.draw do
  resources :posts, only: [ :index, :create ]
  resources :portfolio, only: [ :index ]
  resources :synergies, only: [ :index ]
  root to: 'posts#index'

  resources :ingredients, only: [ :index, :create, :update, :destroy ]
end
