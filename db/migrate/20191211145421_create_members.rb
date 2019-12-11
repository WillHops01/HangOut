class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :members do |t|
      t.integer :user_id, null: false
      t.integer :group_id, null: false
      t.timestamps
    end
    add_index :members, :user_id
    add_index :members, :group_id
    add_index :users, :id
    add_index :users, :email
  end
end
