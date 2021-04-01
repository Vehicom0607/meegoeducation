import * as actionTypes from './actionTypes'
import store from "./store";

const reducer = (state = store, action) => {
    switch (action.type) {
        case actionTypes.ON_PAGE_LOAD:
            return state
        default:
            return state
    }
}

export default reducer