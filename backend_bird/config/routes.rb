Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
   get 'click', to: 'click#validate_click'
  # Defines the root path route ("/")
  # root "articles#index"
  post 'time', to: 'score#add_score'
  get 'time', to: 'score#index'
end
