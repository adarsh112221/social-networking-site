import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from "../actions/actionTypes";

const initialAuthState={
    user:{},
    isLoggeedin:false,
    error:null,
    inProgress:false
}
export default function auth(state=initialAuthState,action)
{
    switch(action.type){
        case LOGIN_START:
        return{
            ...state,
            inProgress:true,
        }
        case LOGIN_SUCCESS:
        return{
            ...state,
            user:action.user,
            inProgress:false,
            error:null,
            isLoggeedin:true,
        }
        case LOGIN_FAILED:
        return{
            ...state,
            inProgress:false,
            error:action.error,
        }
        default:
            return state;
    }
}