class CreateCombinations < ActiveRecord::Migration[6.0]
  def change
    create_table :combinations do |t|
      t.integer :first_ingredient_id
      t.integer :second_ingredient_id
      t.integer :positive_rating, default: 0
      t.integer :negative_rating, default: 0
      t.timestamps
    end
  end
end
