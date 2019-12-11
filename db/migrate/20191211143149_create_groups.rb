class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :creator_id, null: false
      t.float :long, null: false
      t.float :lat, null: false
      t.boolean :private, default: false
      t.timestamps
    end
  end
end
