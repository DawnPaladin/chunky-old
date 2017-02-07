class AddChildrenToCards < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :parent_id, :integer
  end
end
