import * as actionTypes from '../actions/actionTypes'
import startupStore from "./store";

const startupReducer = (state = startupStore, action) => {
    switch (action.type) {
        case actionTypes.GET_COURSE_START:
            return {
                ...state,
                courses: {
                    ...state.courses,
                    loading: true,
                    error: null
                }
            }
        case actionTypes.GET_COURSE_SUCCESS:
            const newCourseData = []
            newCourseData.push(action.courseData)
            return {
                ...state,
                courses: {
                    ...state.courses,
                    loading: false,
                    error: null,
                    courseData: newCourseData

                }
            }
        case actionTypes.GET_COURSE_ERROR:
            return {
                ...state,
                courses: {
                    ...state.courses,
                    loading: false,
                    error: action.error
                }
            }
        default:
            return state
    }
}

export default startupReducer