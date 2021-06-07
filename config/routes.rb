Rails.application.routes.draw do
  resources :posts, only: [ :create ]
  root to: 'posts#index'
end
