import CHANGE_DROPDOWN_STATE from "../actions/ui_actions";

const uiReducer = ( state = {}, action ) => {
    Object.freeze(state);
    switch (action.type) {
        case CHANGE_DROPDOWN_STATE:
            
            
            break;
    
        default:
            break;
    }
}

export default uiReducer;