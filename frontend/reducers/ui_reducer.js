import { CHANGE_DROPDOWN_STATE } from "../actions/ui_actions";

const uiReducer = (state = {dropdownActive: false}, action ) => {
    Object.freeze(state);
    switch (action.type) {
        case CHANGE_DROPDOWN_STATE:
            let newState = !state.dropdownActive;
            return {dropdownActive: newState};
        default:
            let defaultState = {dropdownActive: false};
            return defaultState;
    }
};

export default uiReducer;