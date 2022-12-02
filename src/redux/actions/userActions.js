import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_RESET,
  USER_LOGOUT,
} from "../constants/userConstants";
import { v4 as uuidv4 } from "uuid";

// Login user action
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    console.log({ email, password });

    let user = { email, password, token: uuidv4() };

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: user,
    });

    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_ERROR,
      payload: error.message,
    });

    setTimeout(() => {
      dispatch({ type: USER_LOGIN_RESET });
    }, 3000);
  }
};

// Logout user
export const logout = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: USER_LOGOUT });
};
