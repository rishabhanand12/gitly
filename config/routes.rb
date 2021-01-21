Rails.application.routes.draw do
  root to: 'home#index'
  # get '/:id', to: 'links#show'
  resources :links, only: %i[index create update]
  get '*path', to: 'home#index', via: :all
end
