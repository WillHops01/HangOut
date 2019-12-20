# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

image1 = "/GroupImages/group1.jpg"
image2 = "/GroupImages/group2.jpg"
image3 = "/GroupImages/hipsters.jpg"
hiking_image = "/GroupImages/hikinggroup1.jpg"
image4 = "/GroupImages/group4.jpg"
image5 = "/GroupImages/group5.png"
pizzalover = "GroupImages/pizzalovers.jpeg"
seconvo = "GroupImages/spanish-2-picture.jpg"
videogames = "GroupImages/beervideo.jpg"
salsa = "GroupImages/salsa.jpeg"
books = "GroupImages/bookclub.jpg"


User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
user1 = User.create(username: "Will", email: "email@email.com",password: "hunter2",long:125.15,lat:100.15)
user2 = User.create(username: "edherman", email: "edherman",password: "hunter2",long:125.15,lat:100.15)
user3 = User.create(username: "santaclaus", email: "santa@north-pole.com",password: "hunter2",long:125.15,lat:100.15)
#user4 = User.create(username: "santaclaus", email: "santa@north-pole.com",password: "hunter2",long:125.15,lat:100.15)
demouser = User.create(username: "demouser", email: "DemoUser", password: "hunter2", long:125.15,lat:100.15)

Group.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('groups')
group1 = user1.created_groups.create(name: "NYC Coding Afficionados",
  description: "come discuss your coding woes, strategies, and jokes. Up your coding game.",
  long: 125.13, lat: 100.85, image_link: image1)

group2 = user2.created_groups.create(name: "Jokes R Us",
  description: "We get together to make bad jokes and do other hilarious things",
  long: 125.13, lat: 100.85, image_link: image2)

group3 = user2.created_groups.create(name: "Hipsters Anonymous",
  description: "Help us make up unnecessarily shorter versions of words. Also, we give fashion advice.",
  long: 125.13, lat: 100.85, image_link: image3)

group4 = user1.created_groups.create(name: "Pizza Lovers",
  description: "We travel the countryside sampling all types of pizza. If you like pizza, and you like having friends, then Pizza Lovers is the group for you!",
  long: 125.13, lat: 100.85, image_link: pizzalover)

group5 = user2.created_groups.create(name: "Hike NJ",
  description: "Hike the scenic trails of New Jersey. Explore Northern/Central New Jersey with hikes for all skill-levels.",
  long: 125.13, lat: 100.85, image_link: hiking_image)

group6 = user2.created_groups.create(name: "Spanish / English Conversation Club",
  description: "Come practice your Spanish / English. Venga y practica con nosotros. Somos un grupo diverso con gente de todos lados. Learn Spanish, earn English, drink good coffee.",
  long: 125.13, lat: 100.85, image_link: seconvo)

group7 = user3.created_groups.create(name: "Video Games n Beer",
  description: "We set up Playstation and Xbox in various bars around the city, drink, play video games, and have a good time. Compete for weekly prizes, or just come and enjoy yourself, all are welcome.",
  long: 125.13, lat: 100.85, image_link: videogames)

group8 = user3.created_groups.create(name: "Dance Sala",
  description: "Whether you are a beginner, intermediate, or advanced salsa dancer, our group has something for you. Come dance to your favorite latin rhythms and shake your dancing legs.",
  long: 125.13, lat: 100.85, image_link: salsa)

group9 = user3.created_groups.create(name: "Queens Book Club",
  description: "Come add to our reading repertoire and discuss",
  long: 125.13, lat: 100.85, image_link: books)

group10 = user1.created_groups.create(name: "Waterfall Jumpers",
  description: "We find the best waterfalls, then jump! ",
  long: 125.13, lat: 100.85, image_link: hiking_image)

Member.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('members')
membership1 = Member.create(
  user: user1,
  group: group1
)
membership2 = Member.create(
  user: user2,
  group: group1
)
membership3 = Member.create(
  user: user2,
  group: group2
)
Member.create(
  user: user2,
  group: group3
)
membership6 = Member.create(
  user: user1,
  group: group4
)
Member.create(
  user: user2,
  group: group5
)
Member.create(
  user: user2,
  group: group6
)
Member.create(
  user: user1,
  group: group10
)
#DEMO USER GROUPS
# membership4 = Member.create(
#   user: demouser,
#   group: group1
# )
membership5 = Member.create(
  user: demouser,
  group: group2
)
membership7 = Member.create(
  user: demouser,
  group: group3
)
# membership8 = Member.create(
#   user: demouser,
#   group: group4
# )
Member.create(
  user: user3,
  group: group7
)
Member.create(
  user: user3,
  group: group8
)
Member.create(
  user: demouser,
  group: group9
)
