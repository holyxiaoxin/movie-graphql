# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


movies = Movie.create((1..100).map do |i|
  { title: Faker::Name.name, summary: Faker::Lorem.sentence, year: Random.new.rand(2000..2017) }
end)

actors = Actor.create((1..100).map do |i|
  { name: Faker::Name.name, bio: Faker::Lorem.sentence }
end)

movies.each do |m|
  m.actors << actors.sample(Random.new.rand(1..3))
end
