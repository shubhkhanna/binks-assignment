import { createStore, combineReducers, applyMiddleware } from "redux";
import { userLoginReducer } from "./reducers/userReducers";
import thunk from "redux-thunk";

// Combine all reducers
const reducer = combineReducers({
  userLogin: userLoginReducer,
});

// Initial state of the user
const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  userLogin: { userInfo: userFromStorage },
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
