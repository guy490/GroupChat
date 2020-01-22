import { combineReducers } from "redux";

const INITIAL_STATE = {
  isSignedIn: null
};

const messageReducer = (state = { messages: [] }, action) => {
  if (action.type === "RECIEVE_MESSAGE") {
    return { ...state, messages: [...state.messages, action.payload] };
  }
  return state;
};

const userListReducer = (state = { usersList: [] }, action) => {
  if (action.type === "UPDATE_USERS_LIST") {
    return {
      ...state,
      usersList: [...action.payload]
    };
  }
  return state;
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true, ...action.payload };
    case "SIGN_AS_GUEST":
      return { ...state, isSignedIn: false, ...action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  messageReducer,
  profileReducer,
  userListReducer
});
