import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { PostsList, Navbar, Home, Page404, Login, Signup, Settings } from './';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import * as jwtDecode from 'jwt-decode';
import { authenticateUser } from '../actions/auth';
import UserProfile from './UserProfile';
import { Redirect } from 'react-router';
import { fetchUserFriends } from '../actions/friends';
// const Home = () => <div>Home</div>;
// const Login = () => <div>Login</div>;
// const Signup = () => <div>Signup</div>;

const PrivateRoute = (privateRouteProps) => {
  const { isLoggedin, path, component: Component } = privateRouteProps;

  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedin ? <Component {...props} /> : <Redirect to={{
          pathname:'/login',
          state:{
            from:props.location
          }
        }} />;
      }}
    />
  );
};
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwtDecode(token);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      );
    }
    this.props.dispatch(fetchUserFriends());
  }

  render() {
    const { posts,auth,friends} = this.props;
    console.log('Props', this.props);
    return (
      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts={posts} /> */}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props}  friends={friends} isLoggedin={auth.isLoggedin} posts={posts} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute
              path="/settings"
              component={Settings}
              isLoggedin={auth.isLoggedin}
            />
             <PrivateRoute
              path="/user/:userId"
              component={UserProfile}
              isLoggedin={auth.isLoggedin}
            />
            <Route component={Page404} />
          </Switch>
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
    auth:state.auth,
    friends:state.friends
  };
}
export default connect(mapStateToProps)(App);
