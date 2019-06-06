import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import '../styles/App.css'

class Home extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} alt="React" className="App-logo" style={{width: '20%', height: '20%'}}/>
          <h1 style={{marginTop: '-0.75%'}}>Bank of React</h1>
          <div style={{flexDirection: 'row'}}>
            <button className="ui button">
              <Link to="/userProfile">User Profile</Link>
            </button>
            <button className="ui button">
              <Link to="/debits">Debits</Link>
            </button>
            <button className="ui button">
              <Link to="/credits">Credits</Link>
            </button>
          </div>
          <AccountBalance accountBalance={this.props.accountBalance} />
        </div>
      </div>
    );
  }
}

export default Home;
