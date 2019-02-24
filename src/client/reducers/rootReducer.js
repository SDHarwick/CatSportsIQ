import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// Import custom components
import authReducer from './authReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    form: formReducer  // ← redux-form
});

export default rootReducer;