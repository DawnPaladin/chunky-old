class AddDescriptionToCards < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :description, :text
  end
end
