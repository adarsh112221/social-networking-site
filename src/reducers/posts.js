import { ADD_COMMENT, ADD_POST, UPDATE_POSTS } from "../actions/actionTypes";
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
            case ADD_COMMENT:
                const newPosts=state.map((post)=>{
                    if(post._id===action.postId)
                    {
                    return{
                        ...post,comments:[action.comment,...post.comments],
                    }
                    }
                    return post;
                });
                return newPosts
                default:
                    return state;
    }

}