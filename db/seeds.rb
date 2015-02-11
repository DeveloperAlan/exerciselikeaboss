# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({email: 'alanng95@hotmail.com', password: 'alanng95', admin: true, first_name: 'Alan', last_name: 'Ng'})

Exercise.create({ name: 'Swimming', featured: false, intensity: 1, description: 'Swimming is a pretty awesome', time: 1, calories: 1, exercise_category_id: 1})
ExerciseCategory.create({name: 'Water shit', description: 'lol', exercise_id: 1})
ExerciseProgram.create({exercise_id: 1, name: 'Swimming for Pros', difficulty: '2', description: "Swimming for Pros", estimated_time: 1, number_of_completions: 2})