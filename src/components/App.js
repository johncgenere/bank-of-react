import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import UserProfile from './UserProfile';
import Login from './Login';
import '../styles/App.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render(){
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );
    const LogInComponent = () => (
      <Login
        user={this.state.currentUser}
        mockLogIn={this.mockLogIn} {...this.props}
      />
    );

    return (
      <Router>
        <div className="App">
          <Route path ="/" exact render = {HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;
