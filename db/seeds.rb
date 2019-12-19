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

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
user1 = User.create(username: "Will", email: "email@email.com",password: "hunter2",long:125.15,lat:100.15)
user2 = User.create(username: "edherman", email: "edherman",password: "hunter2",long:125.15,lat:100.15)
user3 = User.create(username: "santaclaus", email: "santa@north-pole.com",password: "hunter2",long:125.15,lat:100.15)
user4 = User.create(username: "santaclaus", email: "santa@north-pole.com",password: "hunter2",long:125.15,lat:100.15)
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
  description: "Help us make up unnecessarily shorter versions of words",
  long: 125.13, lat: 100.85, image_link: image3)

group4 = user1.created_groups.create(name: "Group 4",
  description: "discuss your coding woes, strategies, and jokes. Up your coding game.",
  long: 125.13, lat: 100.85, image_link: image1)

group5 = user2.created_groups.create(name: "Hike NJ",
  description: "Hike the scenic trails of New Jersey.",
  long: 125.13, lat: 100.85, image_link: hiking_image)

group6 = user2.created_groups.create(name: "Spanish / English Conversation Club",
  description: "Come practice your Spanish / English ",
  long: 125.13, lat: 100.85, image_link: image4)

group7 = user3.created_groups.create(name: "Group 7",
  description: "description lalala",
  long: 125.13, lat: 100.85, image_link: image5)

group5 = user3.created_groups.create(name: "Group 8",
  description: "Hike the trails of New Jersey.",
  long: 125.13, lat: 100.85, image_link: image1)

group6 = user3.created_groups.create(name: "Group 9",
  description: "Come practice Spanish / English ",
  long: 125.13, lat: 100.85, image_link: image3)

group7 = user1.created_groups.create(name: "Group 10",
  description: "description lalalala",
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
membership6 = Member.create(
  user: user1,
  group: group4
)
#DEMO USER GROUPS
membership4 = Member.create(
  user: demouser,
  group: group1
)
membership5 = Member.create(
  user: demouser,
  group: group2
)
membership7 = Member.create(
  user: demouser,
  group: group3
)
membership8 = Member.create(
  user: demouser,
  group: group4
)
