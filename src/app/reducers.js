import { combineReducers } from "redux";

const loggedIn = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("user in action", action.user);
      return Object.assign({}, state, action.user);
    case "LOGOUT":
      return (state = {});
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  loggedIn,
});

export default rootReducer;
