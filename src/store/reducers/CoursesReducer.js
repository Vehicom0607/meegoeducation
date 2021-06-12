import * as actionTypes from '../actions/actionTypes'
import startupStore from "./CoursesStore";

const coursesReducer = (state = startupStore, action) => {
    switch (action.type) {
        case actionTypes.GET_COURSE_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionTypes.GET_COURSE_SUCCESS:
            let courseData = Object.keys(action.courseData).map((key) => [action.courseData[key]]);
            courseData = courseData.map(obj => obj[0])
            return {
                ...state,
                loading: false,
                error: null,
                courseData: courseData
            }
        case actionTypes.GET_COURSE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default coursesReducer