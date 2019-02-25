import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// Import custom components
import authReducer from './authReducer';
import userReducer from './userReducer';
import usersReducer from './usersReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    users: usersReducer,
    form: formReducer  // ← redux-form
});

export default rootReducer;