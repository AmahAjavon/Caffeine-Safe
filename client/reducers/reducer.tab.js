const initialState = {
    tab: 0
};

/**
 * function tabReducer, reducer switch statement
 * for request action options.
 *
 * @param  {Object} state
 * @param  {Object} action
 */
function tabReducer(state = initialState, action){
    switch (action.type) {
        case 'MOVE_TO_NEXT_TAB' : {
            return Object.assign({}, state, {
                tab: action.tab
            });
        }
        default:
            return state
    }
}

export default tabReducer;