class Exercise < ActiveRecord::Base
  belongs_to :exercise_category
  has_many :exercise_programs
end
