Rails.application.routes.draw do
  resources :posts, only: [ :index, :create ]
  root to: 'posts#index'

  # get 'ingredients', to: 'ingredients#index'
  # post 'ingredients', to: 'ingredients#create'
  # delete 'ingredients', to: 'ingredients#delete'
  resources :ingredients, only: [ :index, :create, :update, :destroy ]
end

# resources :comments, only: [:create, :destroy] do
#   member do
#     patch "approve"
#   end
# end