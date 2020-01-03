import { combineReducers } from "redux";

const messageReducer = (state = { messages: [] }, action) => {
  if (action.type === "RECIEVE_MESSAGE" || action.type === "USER_CONNECTED") {
    return { ...state, messages: [...state.messages, action.payload] };
  }
  return state;
};

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
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
  messageReducer: messageReducer,
  authReducer: authReducer
});
