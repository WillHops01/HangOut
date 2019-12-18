export const getGroups = () => (
  $.ajax({
    method: "GET",
    url: "api/groups"
  })
);

export const getOneGroup = (groupId) => {  
  return(
    $.ajax({
      method: "GET",
      url: `api/groups/${groupId}`
    })
  );
};

export const createGroup = group => (
  $.ajax({
    method: "POST",
    url: `api/groups`,
    data: { group }
  })
);