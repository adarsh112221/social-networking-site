import { FETCH_FRIENDS_SUCCESS } from "../actions/actionTypes";
const defaultProfileState=[];
//profile reducer
export default function friends(state=defaultProfileState,actions)
{
    switch(actions.type)
    {
        case FETCH_FRIENDS_SUCCESS:
            return [...actions.friends];
            default:
                return state;
    }
}