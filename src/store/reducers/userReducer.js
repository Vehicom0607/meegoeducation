import * as actionTypes from '../actions/actionTypes'

const initialStore =  {
    courses: [],
    loading: false,
    error: null
}

const userReducer = (state=initialStore, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_USER_SUCCESS:
            console.log(action.courses)
            return {
                ...state,
                loading: false,
                courses: action.courses,
                error: null
            }
        case actionTypes.GET_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default userReducer