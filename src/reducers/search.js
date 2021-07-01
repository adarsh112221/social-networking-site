import { FETCH_SEARCH_RESULTS_SUCCESS } from "../actions/actionTypes";

const initiaSearchState={
    results:[],
}
export default function  search(state=initiaSearchState,actions)
{
    switch(actions.type)
    { case FETCH_SEARCH_RESULTS_SUCCESS:
        return{
            ...state,
            results:action.users
        }
        default:
            return state;
    }
}