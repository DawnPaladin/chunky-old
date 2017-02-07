class AddOrderToCardsAndLists < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :order, :integer
    add_column :lists, :order, :integer
  end
end
