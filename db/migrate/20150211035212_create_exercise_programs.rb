class CreateExercisePrograms < ActiveRecord::Migration
  def change
    create_table :exercise_programs do |t|
      t.integer :exercise_id
      t.string :name
      t.integer :difficulty
      t.text :description
      t.integer :estimated_time
      t.integer :number_of_completions

      t.timestamps null: false
    end
  end
end
