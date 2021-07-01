import React, { Component } from 'react';
import { PostsList,Chat} from './';
class Home extends Component {
    render() {
        const{posts}=this.props
        console.log('props',this.props)
        return (
            <div className="home">
                <PostsList posts={posts}/>
                {isLoggedin && <FriendsList friends={friends} />}
                {isLoggedin&&<Chat/>}
            </div>
        );
    }
}

export default Home;