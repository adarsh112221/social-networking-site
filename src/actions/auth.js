import {
	LOGIN_START,
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	AUTHENTICATE_USER,
	LOG_OUT,
	SIGNUP_START,
	SIGNUP_FAILED,
	SIGNUP_SUCCESS,
	CLEAR_AUTH_STATE,
  } from './actionTypes';
  import { APIUrls } from '../helpers/urls';
  import { getFormBody } from '../helpers/utils';
  
  export function startLogin() {
	return {
	  type: LOGIN_START,
	};
  }
  export function loginFailed(errorMessage) {
	return {
	  type: LOGIN_FAILED,
	  error: errorMessage,
	};
  }
  
  export function loginSuccess(user) {
	return {
	  type: LOGIN_SUCCESS,
	  user,
	};
  }
  
  export function login(email, password) {
	return (dispatch) => {
	  dispatch(startLogin());
	  const url = APIUrls.login();
	  fetch(url, {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: getFormBody({ email, password }),
	  })
		.then((response) => response.json())
		.then((data) => {
		  console.log('data', data);
		  if (data.success) {
			// dispatch action to save user
			localStorage.setItem('token', data.data.token);
			dispatch(loginSuccess(data.data.user));
			return;
		  }
		  dispatch(loginFailed(data.message));
		});
	};
  }
  
  export function authenticateUser(user) {
	return {
	  type: AUTHENTICATE_USER,
	  user,
	};
  }
  
  export function logoutUser() {
	return {
	  type: LOG_OUT,
	};
  }
  
  export function signup(email, password, confirmPassword, name) {
	return (dispatch) => {
	  const url = APIUrls.signup();
	  fetch(url, {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: getFormBody({
		  email,
		  password,
		  confirm_password: confirmPassword,
		  name,
		}),
	  })
		.then((response) => response.json())
		.then((data) => {
		  // console.log('data', data);
		  if (data.success) {
			// do something
			localStorage.setItem('token', data.data.token);
			dispatch(signupSuccessful(data.data.user));
			return;
		  }
		  dispatch(signupFailed(data.message));
		});
	};
  }
  
  export function startSingup() {
	return {
	  type: SIGNUP_START,
	};
  }
  
  export function signupFailed(error) {
	return {
	  type: SIGNUP_FAILED,
	  error,
	};
  }
  
  export function signupSuccessful(user) {
	return {
	  type: SIGNUP_SUCCESS,
	  user,
	};
  }
  export function clearAuthState()
  {
	  return{
	  type:CLEAR_AUTH_STATE
	  }
  }
  