Rails.application.routes.draw do

  devise_for :users
  root 'angular#index'

  scope :api do
    scope :v1 do
      resources :boards, only: [:create, :index, :show, :destroy]
      resources :lists, only: [:show]
      resources :cards, only: [:create, :update]
    end
  end

end
