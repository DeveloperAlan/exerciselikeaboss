class ExerciseProgramsController < ApplicationController
  before_action :find_exercise_program, only: [:destroy, :update]
  before_action :authenticate_user!
  def index
    @exercise_programs = ExerciseProgram.all
    render json: @exercise_programs
  end

  def create 
    @exercise_program = ExerciseProgram.create(exercise_program_params)
    render json: @exercise_program
  end

  def update
    @exercise_program.update(exercise_program_params)
    render json: @exercise_program
  end

  def destroy
    @exercise_program.destroy
    render json: { status: "OK"}
  end

  private

  def find_exercise_program
    @exercise_program = ExerciseProgram.find(params[:id])
  end

  def exercise_program_params
    params.require(:exercise_program).permit(:exercise_id, :name, :difficulty, :description, :estimated_time, :number_of_completions)
  end
end
