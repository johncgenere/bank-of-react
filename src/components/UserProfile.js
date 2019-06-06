import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/App.css';

class UserProfile extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>User Profile</h1>
          <button className="ui button">
            <Link to="/">Go Home</Link>
          </button>
          <div className="ui icon message" style={{width: '30%', fontSize: '15px'}}>
            <i className="user circle icon"></i>
            <div className="content">
              <div className="header">
                Username: {this.props.userName}
              </div>
              <p>Member Since: {this.props.memberSince}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
