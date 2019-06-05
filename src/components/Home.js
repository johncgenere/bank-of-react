import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import '../styles/App.css'

class Home extends Component {
  render(){
    return(
      <div>
        <img src={logo} alt="React" className="App-logo" style={{width: '20%', height: '20%'}}/>
        <h1>Bank of React</h1>
        <Link to="/userProfile">User Profile</Link>
        <AccountBalance accountBalance={this.props.accountBalance} />
      </div>
    );
  }
}

export default Home;
