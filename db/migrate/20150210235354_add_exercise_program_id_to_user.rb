class AddExerciseProgramIdToUser < ActiveRecord::Migration
  def change
    add_column :users, :exercise_program_id, :integer
  end
end
