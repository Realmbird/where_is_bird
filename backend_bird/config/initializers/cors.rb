Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'your-frontend-domain.com' # You can also use '*' to allow any origin
    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end