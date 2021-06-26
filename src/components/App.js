import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { PostsList,Navbar,Home,Page404,Login,Signup} from './';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom';
import * as jwtDecode from 'jwt-decode';
// const Home = () => <div>Home</div>;
// const Login = () => <div>Login</div>;
// const Signup = () => <div>Signup</div>;
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    const token=localStorage.getItem('token');
    if(token)
    {
      const user=jwtDecode(token)
    }
  }

  render() {
    const { posts } = this.props;
    console.log('Props', this.props);
    return (
      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts={posts} /> */}
          <Switch>
          <Route exact path="/"  render={(props)=>{return <Home {...props} posts={posts} />}}/>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route  component={Page404} /></Switch>
        </div>
        
      </Router>
    );
  }
}
App.propTypes = {
  posts: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(App);
