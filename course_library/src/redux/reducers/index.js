import { combineReducers }  from 'redux';
import authorReducer from './authorReducer';

const rootReducer = combineReducers({
    authors: authorReducer
});

export default rootReducer;