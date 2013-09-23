class Article
  include Mongoid::Document
  include MediaMagick::Model

  field :name, type: String

  attaches_many :photos, type: :image
  accepts_nested_attributes_for :photos
end
