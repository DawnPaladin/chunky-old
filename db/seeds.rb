puts "Destroying universe..."

User.destroy_all
Board.destroy_all
List.destroy_all
Card.destroy_all

NUM_USERS = 5
NUM_BOARDS = 3
NUM_LISTS = 3
NUM_CARDS = 5

puts "Seeding universe..."
NUM_USERS.times do
  user = User.create(email: Faker::Internet.email, password: "123456789")
  NUM_BOARDS.times do
    board = user.boards.create(name: Faker::Space.galaxy + " galaxy")
    NUM_LISTS.times do
      list = board.lists.create(name: Faker::Space.constellation)
      NUM_CARDS.times do
        list.cards.create(title: Faker::Space.star, description: Faker::StarWars.wookie_sentence)
      end
    end
  end
end
puts "Seeding complete."
puts "First user:"
puts User.first.email
