const initialState = {
    itemsList: [],
    item: {}
};

/**
 * function caffeineReducer, reducer switch statement
 * for request action options.
 *
 * @param  {Object} state
 * @param  {Object} action
 */
function caffeineReducer(state = initialState, action){
    switch (action.type) {
        case 'FETCH_ALL_CAFFEINE_ITEMS' : {
            return Object.assign({}, state, {
                itemsList: action.itemsList
            });
        }
        case 'FETCH_SINGLE_ITEM' : {
            return Object.assign({}, state, {
                item: action.item
            });
        }
        case 'CLEAR_SINGLE_ITEM' : {
            return Object.assign({}, state, {
                item: {}
            });
        }
        default:
            return state
    }
}

export default caffeineReducer;
