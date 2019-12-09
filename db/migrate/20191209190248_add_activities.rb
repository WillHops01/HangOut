class AddActivities < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :favorite_activities, :string, array: true, default: []
    #add_column :books, :subjects, :text, array: true, default: []
  end
end
