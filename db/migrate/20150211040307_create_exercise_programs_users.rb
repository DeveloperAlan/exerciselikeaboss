class CreateExerciseProgramsUsers < ActiveRecord::Migration
  def change
    create_table :exercise_programs_users do |t|

      t.timestamps null: false
    end
  end
end
