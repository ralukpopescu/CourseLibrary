import * as types from "./actionTypes" ;
import * as courseApi from "../../api/courseApi";

export function loadCoursesSuccess(courses)
{
    return {
        type: types.LOAD_COURSES_SUCCESS,
        courses
    }
}

export function getCoursesForAuthor(authorId)
{
    return function(dispatch){
        return courseApi.getCoursesForAuthor(authorId).then( courses=>{
            dispatch(loadCoursesSuccess(courses));
        }).catch(error=>{
            throw error;
        })
    }
}