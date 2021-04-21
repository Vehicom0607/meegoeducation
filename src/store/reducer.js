import * as actionTypes from './actionTypes'
import store from "./store";

const reducer = (state = store, action) => {
    switch (action.type) {
        case actionTypes.ON_PAGE_LOAD:
            return state
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
            const newCourseData = state.courses.courseData
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

export default reducer