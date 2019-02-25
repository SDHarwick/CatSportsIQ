import { FETCH_USER_SUCCESS, FETCH_USERS_SUCCESS } from '../constants/actionType';

let initialState = {
  user: {},
};

export default function(state, action) {
  state = state || initialState;
  
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}