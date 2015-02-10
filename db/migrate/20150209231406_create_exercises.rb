class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.string :name
      t.boolean :featured
      t.integer :intensity
      t.text :description
      t.integer :time
      t.integer :calories
      t.integer :exercise_category_id

      t.timestamps null: false
    end
  end
end
