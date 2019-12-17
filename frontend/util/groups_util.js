export const getGroups = () => (
  $.ajax({
    method: "GET",
    url: "api/groups"
  })
);

export const getOneGroup = (groupId) => (
  $.ajax({
    method: "GET",
    url: `api/groups/${groupId}`
  })
);