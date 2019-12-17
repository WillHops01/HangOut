// import React from "react";

// class MyGroups extends React.Component{
//   constructor(props){
//     super(props);
//     let groupIds;
//     let myGroups = {}
//     let maxGroups = 6;
//     debugger
//     this.buildGroupEles = this.buildGroupEles.bind(this)
//     //this.getMyTopGroups = this.getMyTopGroups.bind(this);
//   }
  
//   componentDidMount(){
//     groupIds = this.props.groupIds;
//     this.buildGroupEles();
//     //this.getMyTopGroups();
//   }

//   getMyTopGroups(){
//     // groupIds = [1,4,6]

//     // let count = 0;
//     // groupIds.forEach(id => {
//     //   myGroups[id] = this.props.groups[id]
//     //   count++;
//     //   if (count >= maxGroups){
//     //     continue;
//     //   }
//     // })
//     // debugger;
//   }

//   buildGroupEles(){
//     let count = 0;
//     myGroups = groupIds.map((id, idx) => {
//       let group = this.props.groups[id];
//       count = count + 1;
//       // if( count > maxGroups ){
//       //   continue;
//       // }
//       return(
//         <div className="fav-group-element" key={idx}>
//           <span className="fav-group-name">
//             { group.name }
//           </span>
//           <p className="fav-group-description">
//             {group.description}
//           </p>
//         </div>
//       )
//     })
//     debugger
//   }

//   render(){
//     debugger
//     return(
//       <div id="fav-groups-container">
//         { myGroups }
//       </div>
//     )
//   }
// }