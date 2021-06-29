import { APIUrls } from "../helpers/urls"
import { getAuthTokenFromLocalStorage } from "../helpers/utils"
import { FETCH_FRIENDS_SUCCESS } from "./actionTypes"
export function fetchFriendsSuccess(friends)
{
    return{
type:FETCH_FRIENDS_SUCCESS,
friends
    }
}
export function fetchUserFriends(userId)
{
  return (dispatch)=>{
      const url=APIUrls.userFriends(userId)
      fetch(url,{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer${getAuthTokenFromLocalStorage()}`,
          }
      }).then((response)=>{response.json()}).then((data)=>{
          if(data.success)
          dispatch(fetchFriendsSuccess(data.data.friends))
      })
  }  
} 