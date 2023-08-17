class CreateIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :ingredients do |t|
      t.timestamps
      t.string :name
      t.text :description
      t.string :color
      t.string :image
    end
    add_index :ingredients, :name, unique: true
  end
end
