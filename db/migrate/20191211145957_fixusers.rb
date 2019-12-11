class Fixusers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :favorite_activities
  end
end
