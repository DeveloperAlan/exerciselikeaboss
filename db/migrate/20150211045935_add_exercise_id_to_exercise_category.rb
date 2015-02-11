class AddExerciseIdToExerciseCategory < ActiveRecord::Migration
  def change
    add_column :exercise_categories, :exercise_id, :integer
  end
end
