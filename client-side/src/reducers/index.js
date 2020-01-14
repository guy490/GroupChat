import { combineReducers } from "redux";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

const messageReducer = (state = { messages: [] }, action) => {
  if (action.type === "RECIEVE_MESSAGE") {
    return { ...state, messages: [...state.messages, action.payload] };
  }
  return state;
};

const connectionReducer = (state = { usersConnectedList: [] }, action) => {
  if (action.type === "UPDATE_USERS_LIST") {
    return {
      ...state,
      usersConnectedList: [...action.payload]
    };
  }
  return state;
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true, userDetails: action.payload };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, userDetails: null };
    default:
      return state;
  }
};

export default combineReducers({
  messageReducer,
  authReducer,
  connectionReducer
});
