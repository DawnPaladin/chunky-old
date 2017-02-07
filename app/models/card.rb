class Card < ApplicationRecord
  belongs_to :list, optional: true
  has_many :children, foreign_key: :parent_id, class_name: "Card"
  belongs_to :parent, optional: true
end
