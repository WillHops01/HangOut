export const getGroups = () => (
  $.ajax({
    method: "GET",
    url: "api/groups"
  })
);