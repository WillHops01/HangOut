# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user1 = User.create(username: "Will", email: "email@email.com",password: "hunter2",long:125.15,lat:100.15)
user2 = User.create(username: "edherman", email: "edherman",password: "hunter2",long:125.15,lat:100.15)
demouser = User.create(username: "demouser", email: "DemoUser", password: "hunter2", long:125.15,lat:100.15)

Group.destroy_all
group1 = user1.created_groups.create(name: "NYC Coding Afficionados",
  description: "come discuss your coding woes, strategies, and jokes. Up your coding game.",
  long: 125.13, lat: 100.85)

group2 = user2.created_groups.create(name: "Jokes R Us",
  description: "We get together to make bad jokes and do other hilarious things",
  long: 125.13, lat: 100.85)

group3 = user2.created_groups.create(name: "Group 3",
  description: "We make bad jokes and do other hilarious things",
  long: 125.13, lat: 100.85)

group4 = user1.created_groups.create(name: "Group 4",
  description: "discuss your coding woes, strategies, and jokes. Up your coding game.",
  long: 125.13, lat: 100.85)

Member.destroy_all
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
