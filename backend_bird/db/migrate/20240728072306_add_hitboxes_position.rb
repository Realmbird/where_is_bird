class AddHitboxesPosition < ActiveRecord::Migration[7.0]
  def change
    add_column :positions, :hitbox_width, :integer
    add_column :positions, :hitbox_height, :integer
  end
end
