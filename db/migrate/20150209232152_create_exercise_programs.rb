class CreateExercisePrograms < ActiveRecord::Migration
  def change
    create_table :exercise_programs do |t|
      t.string :name
      t.Integer :estimated_time
      t.Integer :exercise_id
      t.Integer :user_id
      t.integer :user_id
      t.integer :number_of_times_of_completion

      t.timestamps null: false
    end
  end
end
