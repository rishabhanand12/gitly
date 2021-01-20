Rails.application.routes.draw do
  root to: 'home#index'
  resources :link, only: [:index]
end
  