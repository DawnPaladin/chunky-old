class BoardAndListIds < ActiveRecord::Migration[5.0]
  def change
    add_column :lists, :board_id, :integer
    add_column :cards, :list_id, :integer
  end
end
