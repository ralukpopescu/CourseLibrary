import * as types from "../actions/actionTypes" ;
import initialState from "./initialState";

export default function authorReducer(state=initialState.authors,action)
{
    switch(action.type)
    {
        case types.SAVE_AUTHOR_SUCCESS:
            //state.push(action.author);//this mutates the state
            return [...state, {...action.author}]
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}