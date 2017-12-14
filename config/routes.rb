Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api do
    get 'users/search'
  end

  get 'login' => 'user_sessions#new', :as => :login
  get 'logout' => 'user_sessions#destroy', :as => :logout
  resources :user_sessions, only: [:create]
end
