import * as types from "./actionTypes" ;

export function createAuthor(author){
    return {type: "CREATE_AUTHOR", author}
}