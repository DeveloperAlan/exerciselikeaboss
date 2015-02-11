class ExerciseCategoriesController < ApplicationController
  def index 
    @exercise_categories = ExerciseCategory.all
    render json: @exercise_categories
  end

  def create 
    @exercise_category = ExerciseCategory.create(exercise_category_params)
    render json: @exercise_category
  end

  def update
    @exercise_category.update(exercise_category_params)
    render json: @exercise_category
  end

  def destroy
    @exercise_category.destroy
    render json: { status: "OK"}
  end

  private

  def find_exercise_category
    @exercise_category = ExerciseCategory.find(params[:id])
  end

  def exercise_category_params
    params.require(:exercise_category).permit(:name, :description, :exercise_id)
  end
end
