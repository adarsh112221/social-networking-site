import {
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAILURE,
    FETCH_USER_PROFILE,
  } from '../actions/actionTypes';
  
  const initialProfileState={
      user:{},
      error:null,
      success:null,
      inprogress:false
  }
  export default function profile(state = initialProfileState, action) {
    switch (action.type) {
      case USER_PROFILE_SUCCESS:
        return {
          ...state,
          success: true,
          user: action.user,
          inProgress: false,
        };
      case USER_PROFILE_FAILURE:
        return {
          ...state,
          error: action.error,
          inProgress: false,
        };
      case FETCH_USER_PROFILE:
        return {
          ...state,
          inProgress: true,
        };
      default:
        return state;
    }
  }
  