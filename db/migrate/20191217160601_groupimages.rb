class Groupimages < ActiveRecord::Migration[5.2]
  def change
    add_column :groups, :image_link, :string
  end
end
