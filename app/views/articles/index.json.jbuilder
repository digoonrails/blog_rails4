json.array!(@articles) do |article|
  json.extract! article, :name
  json.url article_url(article, format: :json)
end
