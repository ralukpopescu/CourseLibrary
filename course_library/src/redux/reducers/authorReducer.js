import * as types from "../actions/actionTypes" ;

export default function authorReducer(state=[],action)
{
    switch(action.type)
    {
        case "CREATE_AUTHOR":
            //debugger;
            //state.push(action.author);//this mutates the state
            return [...state, {...action.author}]
        default:
            return state;
    }
}