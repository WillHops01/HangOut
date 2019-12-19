class Uniquemembership < ActiveRecord::Migration[5.2]
  def change
    add_index :members, [:user_id, :group_id], unique: true
  end
end
