class ExerciseProgramsUser < ActiveRecord::Base
  belongs_to :users
  belongs_to :exercise_programs
end
