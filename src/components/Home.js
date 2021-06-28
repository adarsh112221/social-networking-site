import React, { Component } from 'react';
import { PostsList } from './';
class Home extends Component {
    render() {
        const{posts}=this.props
        console.log('props',this.props)
        return (
            <div className="home">
                <PostsList posts={posts}/>
                {isLoggedin && <FriendsList friends={friends} />}
            </div>
        );
    }
}

export default Home;