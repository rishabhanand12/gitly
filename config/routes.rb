Rails.application.routes.draw do
  root to: 'home#index'
  resources :links, only: %i[index create update show]
  get '*path', to: 'home#index', via: :all
end
