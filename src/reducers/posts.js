import { ADD_POST, UPDATE_POSTS } from "../actions/actionTypes";
export default function posts(state=[],action)
{
    switch(action.type)
    {
        case UPDATE_POSTS:
            return action.posts
            default:
                return state;
                case ADD_POST:
                    return [
                        action.posts,...state
                    ]
    }

}