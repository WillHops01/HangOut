<h1 align="center">Hang Out App</h1>


<h2 align="center">The World Is Calling</h3>
<h4 align="center">Join a group to hangout with new friends..</h4>
<h4 align="center">..learn something new..</h4>
<h4 align="center">..or do something you love to do!</h4>

[Find a group or activity near you today](https://hangout-group-app.herokuapp.com/)

## What is Hang Out?
#### Hang out is an app designed to allow people to connect, meet up, and hang out!  
Users can:
* find local groups
* join groups they are interested in

## Technologies Used
**Ruby on Rails** -  
**React** -  
**Redux** -  



## Notable Features
#### chained promise callbacks in order to guarantee proper state for render
```javascript
componentDidMount() {    
    if (!this.state.fetched) {
      this.props.fetchGroups().then(() =>
        this.setState({fetched: true})
      )
    }
  }

  render(){          
    if (!this.state.fetched){ 
      return null;
    } else {
        this.myGroups = this.props.current_user.current_user_groups;
        if (this.myGroups) {
          return (
            <div id="my-groups-container">
              {this.buildMyGroups()}
            </div>
          )
        } else {
          return null;
        }
      }
    }
```
```javascript
export const fetchGroups = () => dispatch =>{  
  return(getGroups().then(groups => (
    dispatch(receiveGroups(groups))
  )))
};
```
The component in question renders all groups. However, we could not check if group slice of state was defined as our render condition since a user could potentially arrive to the index page from a group page, thus a single group or groups would already exist in state (but not all groups).
Using the above technique, we ensure that our render only occurs once all groups have successfully been loaded into state.
#### Clean re-render of multi-option menu
```javascript
this.state = {
      about: "selected",
      events: "unselected",
      members: "unselected",
    };

changeSelect(buttonTitle){
    //check if click is on already selected element
    if (this.state[buttonTitle] === "selected"){
      return;
    }
    let newState = {};
    Object.keys(this.state).forEach(key => {      
      if(key === buttonTitle){
        newState[key] = "selected";
      } else {
        newState[key] = "unselected";
      }
    });    
    this.setState(newState);    
  }
```
Rather than this.setState for each element on each iteration, instead we create a new object, set the key-value pairs of the object to our new state, then call our setState once only, passing it this new object and triggering only a single re-render.


## Next Steps
#### Coming soon:
* group events, 
* user calendar, 
* event RSVPS
* search
* Google location API

