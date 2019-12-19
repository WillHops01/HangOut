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

export const createMember = (member) => {
  //let member = {userId, groupId}
  // debugger
  return(
    $.ajax({
      method: "POST",
      url: "api/members",
      data: {member}
    })
  )
}

export const deleteMember = (member) => {    
  return(
    $.ajax({
      method: "DELETE",
      url: `api/members/${member.groupid}`,
      data: {member}
    })
  )
}