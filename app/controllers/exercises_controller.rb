class ExercisesController < ApplicationController
before_action :find_exercise, only: [:destroy, :update]
before_action :authenticate_user!
  def index
    @exercises = Exercise.all
    render json: @exercises
  end

  def create
    @exercise = Exercise.create(exercise_params)
    render json: @exercise
  end

  def update
    @exercise.update(exercise_params)
    render json: @exercise
  end

  def destroy
    @exercise.destroy
    render json: { status: "OK"}
  end

  private

  def find_exercise
    @exercise = Exercise.find(params[:id])
  end

  def exercise_params
    params.require(:exercise).permit(:name, :featured, :intensity, :description, :time, :calories, :exercise_category_id)
  end
end
