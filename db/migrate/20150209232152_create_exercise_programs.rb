class CreateExercisePrograms < ActiveRecord::Migration
  def change
    create_table :exercise_programs do |t|
      t.string :name
      t.integer :estimated_time
      t.integer :exercise_id
      t.integer :user_id
      t.integer :user_id
      t.integer :number_of_times_of_completion

      t.timestamps null: false
    end
  end
end
