import * as types from "./actionTypes" ;
import * as authorApi from "../../api/authorApi";

export function loadAuthorsSuccess(authors){
    return {
        type: types.LOAD_AUTHORS_SUCCESS,
        authors
    }
}

export function saveAuthorSuccess(author){
    return {
        type: types.SAVE_AUTHOR_SUCCESS,
        author
    }
}

export function deleteAuthorOptimistic(authorId){
    return {
        type: types.DELETE_AUTHOR_OPTIMISTIC,
        authorId
    }
}

export function getAuthors(){
    return function(dispatch){
        return authorApi.getAuthors().then( authors=>{
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error=>{
            throw error;
        })
    }
}

export function saveAuthor(author){
    return function(dispatch)    {
        return authorApi.saveAuthor(author).then(savedAuthor => {
            dispatch(saveAuthorSuccess(savedAuthor));
        }).catch(error=>{
            throw error;
        })
    }
}

export function deleteAuthor(authorId){
    return function(dispatch){
        dispatch(deleteAuthorOptimistic(authorId));
        return authorApi.deleteAuthor(authorId);
    }
}