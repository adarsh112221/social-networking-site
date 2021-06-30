import React, { Component } from 'react';

class CreatePost extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            content:'',
        }
        
    }
    handleOnClick=()=>{
        //dispatch an action
    }
    handleChange=()=>{
        this.setState({
            content :e.target.value,
        })
    }
    render() {
        return (
            <div className="create-post">
                <textarea value={this.getSnapshotBeforeUpdate.content} className="add-post" onChange={this.handleChange}/>
                <div>
                    <button id="add-post-btn" onClick={this.handleOnClick}>Add Post
                    </button>
                </div>
                
            </div>
        );
    }
}

export default CreatePost;