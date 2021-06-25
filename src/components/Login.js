import React, { Component } from 'react';

class Login extends Component {
    constructor(props)
    {
        super(props);
        // this.emailInputRef=React.createRef();
        // this.passwordInputRef=React.createRef();
        this.state={
          email:'',
          password:''
        }
    }
    handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log('this.email',this.email);
        console.log('this.password',this.password);
        // console.log('this.emailInputRef',this.emailInputRef);
        // c
        // console.log('this.passwordInputRef',this.passwordInputRef)
    }
    handleEmailChange=(e)=>{
      // console.log(this.email)
      // this.email=e.target.value
      this.setState({
        email:e.target.value
      })
    }
    handlePasswordChange=(e)=>{
      // this.password=e.target.value
      this.setState({
        email:e.target.value
      })
    }
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input type="email" placeholder="Email" required /*ref={this.emailInputRef}*/ onChange={this.handleEmailChange}  value={this.email}/>
        </div>
        <div className="field">
          <input type="password" placeholder="Password" required onChange={this.handlePasswordChange} value={this.password}/>
        </div>
        <div className="field">
          <button onClick={this.handleFormSubmit}>Log In</button>
        </div>
      </form>
    );
  }
}

export default Login;
