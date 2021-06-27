import React, { Component } from 'react';
import { connect } from 'react-redux';

class Setting extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:props.auth.user.name,
            password:'',
            confirmPassword:'',
            editMode:false,
        };
    }
    handleChange=(feildname,val)=>{
        this.setState({
            [feildname]:val
        })
    }
    render() {
        const{user}=this.props.auth;
        const{editMode}=this.state;
        return (
            <div className="settings">
                <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>
        <div className="field">
          <div classname="field-label">Email</div>
          <div classname="field-value">{user.email}</div>
        </div>

        <div className="field">
        <div classname="field-label">name</div>
        {editMode?(<input type="text" onChange={(e)=>this.handleChange('name',e.target.value)} value={this.state.name}/>):(<div classname="field-value">{user.name}</div>) }
        </div>
         
        {editMode && (
          <div className="field">
            <div classname="field-label">New password</div>

            <input
              type="password"
              onChange={() => this.handleChange('password',e.target.value)}
              value={this.state.password}
            />
          </div>
        )}
             {editMode && (
          <div className="field">
            <div classname="field-label">Confirm password</div>

            <input
              type="password"
              onChange={() => this.handleChange('confirmPassword',e.target.value)}
              value={this.state.confirmPassword}
            />
          </div>
        )}
             <div className="btn-grp">
          {editMode ? (
            <button className="button save-btn">Save</button>
          ) : (
            <button className="button edit-btn" onClick={()=>this.handleChange('editMode',true)}>Edit profile</button>
          )}

          {editMode && <div className="go-back" onClick={()=>this.handleChange('editMode',false)}>Go back</div>}
        </div>
                
        </div>
        );
    }
}
function mapStateToProps({auth})
{
    return{
        auth
    }
}
export default connect(mapStateToProps)(Setting);

// export default Setting;