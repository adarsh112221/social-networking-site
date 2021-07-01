import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLike, createComment } from '../actions/posts';
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }
  handleOnCommentChange = () => {
    this.setState({
      comment: e.target.value,
    });
  };
  handleAddComment = (e) => {
    const { comment } = this.dispatch;
    const { post } = this.props;
    if (e.key == 'enter') {
      this.props.dispatch(createComment(comment, post._id));
      this.setState({
        comment: '',
      });
    }
  };
  handlePostLike=()=>{
    const{post,user}=this.props;
    this.props.dispatch(addLike(post._id,'Post',user._id))
  }
  render() {
    const { post,user} = this.props;
    const { comment } = this.state;
    const isPostLikedByUser = post.likes.includes(user._id);
    return (
      <div className="post-wrapper" key={post._id}>
        <div className="post-header">
          <div className="post-avatar">
            <Link to={`/user/${post.user._id}`}>
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-pic"
              />
            </Link>
            <div>
              <span className="post-author">{post.user.name}</span>
              <span className="post-time">a minute ago</span>
            </div>
          </div>
          <div className="post-content">{post.content}</div>

          <div className="post-actions">
            <button className="post-like no-btn" onClick={this.handlePostLike}/>
            {isPostLikedByUser?<img
                src="https://image.flaticon.com/icons/svg/1076/1076984.svg"
                alt="likes-icon"
              />:<img
                src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                alt="likes-icon"
              />}
              
              <span>{post.likes.length}</span>
            </div>

            <div className="post-comments-icon">
              <img
                src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                alt="comments-icon"
              />
              <span>{post.comments.length}</span>
            </div>
          </div>
          <div className="post-comment-box">
            <input
              onChange={this.handleOnCommentChange}
              onKeyPress={this.handleAddComment}
              value={comment}
              placeholder="Start typing a comment"
            />
          </div>

          <div className="post-comments-list">
            {post.comments.map((comment) => {
              <Comment comment={comment} key={comment._id} postId={post._id} />;
            })}
            {/* <div className="post-comments-item">
                      <div className="post-comment-header">
                        <span className="post-comment-author">Bill</span>
                        <span className="post-comment-time">a minute ago</span>
                        <span className="post-comment-likes">22</span>
                      </div>
    
                      <div className="post-comment-content">Random comment</div>
                    </div> */}
          </div>
        </div>
      // </div>
    );
  }
}
post.propTypes = {
  post: PropTypes.object.isRequired,
};
function mapStateToProps({auth})
{
  return{
    user:auth.user,
  }
}
export default connect(mapStateToProps)(Post);
