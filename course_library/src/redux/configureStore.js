import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducers"
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from 'redux-thunk';

export default function configureStore(initialState){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//used to add support for Redux dev tools
    return createStore(
        rootReducer,
        initialState, 
        composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
    );//this will warn us if we accidentally mutate Redux state
}