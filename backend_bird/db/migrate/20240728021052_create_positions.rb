class CreatePositions < ActiveRecord::Migration[7.0]
  def change
    create_table :positions do |t|
      t.float :x
      t.float :y
      t.string :target

      t.timestamps
    end
  end
end
