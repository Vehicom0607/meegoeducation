import axios from "axios";
import * as actionTypes from './actionTypes'

export const getCourses = () => {
    return dispatch => {
        axios.get("https://meegoeducation-da33a-default-rtdb.firebaseio.com/courses.json")
            .then(response => {
                dispatch(getCourseSuccess(response))
            })
            .catch(error => {
                dispatch(getCourseError(error))
            })
    }
}

export const getCourseStart = () => {
    return {type: actionTypes.GET_COURSE_START}
}

export const getCourseSuccess = (response) => {
    return {type: actionTypes.GET_COURSE_SUCCESS, courseData: response.data}
}

export const getCourseError = (error) => {
    return {type: actionTypes.GET_COURSE_ERROR, error: error}
}