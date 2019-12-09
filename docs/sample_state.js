const sampleState = {
  entities: {
    users: {
      1: {
        id: 1,
        username: "Lola",
        long: 125.12,
        lat: 40.16,
        favorite_activities: ["hiking", "outdoor", "eating"],
      },
      2: {
        id: 2,
        username: "Silvester",
        long: 125.12,
        lat: 40.16,
        favorite_activities: ["hiking", "outdoor", "eating"],
      }
    },
    groups: {
      1: {
        id: 1,
        name: "AppAcademy",
        description: "learn to code in 16 weeks!",
        activities: ["coding", "javascript", "ruby"],
        long: 200.15,
        lat: 190.30,
        creator_id: 1
      },
      2: {
        id: 2,
        name: "Hike NJ",
        description: "Hikers of all levels explore the trails of New Jersey",
        activities: ["hiking", "walking", "outdoors", "exercise"],
        long: 300.14,
        lat: 121.90,
        creator_id: 2
      }
    },
    events: {
      1: {
        id: 1,
        name: "Intermediate Jockey Hollow",
        description: "6 hours through moderately difficult terrain in Jockey Hollow, Morristown",
        date: 12/30/19,
        group_id: 2,
        creator_id: 1,
        long: 400.15,
        lat: 100.04
      }
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username and/or password"],
    groupForm: ["group must have a name"]
  },
  session: { currentUserId: 1 }
};