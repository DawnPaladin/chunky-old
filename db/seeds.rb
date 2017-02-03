NUM_USERS = 5
NUM_BOARDS = 3

NUM_USERS.times do
  user = User.create(email: Faker::Internet.email, password: "123456789")
  NUM_BOARDS.times do
    user.boards.create(name: Faker::Food.ingredient)
  end
end
puts "Created users and boards"
