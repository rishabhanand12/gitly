Rails.application.routes.draw do
  root to: 'home#index'
  get '/:id', to: 'link#show'
  resources :link, only: %i[index create update]
end
