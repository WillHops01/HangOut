import React from "react";

const uiComponent = ({ui}) => {
  if(!ui.dropdownActive){
    return(
      <h3>UI ACTIVE</h3>
    )
  } else {
    return null;
  }
}

export default uiComponent;