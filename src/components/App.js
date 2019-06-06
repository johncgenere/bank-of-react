import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import UserProfile from './UserProfile';
import Login from './Login';
import Debits from './Debits';
import Credits from './Credits';
import axios from 'axios';
import '../styles/App.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      totalDebits: [],
      totalCredits: []
    }

    axios.get('https://moj-api.herokuapp.com/debits')
      .then(response => {
        let totalDebits = response.data;
        this.setState({totalDebits})
      })
      .catch(err => {
        console.log(err);
      });

    axios.get('https://moj-api.herokuapp.com/credits')
      .then(response => {
        let totalCredits = response.data;
        this.setState({totalCredits})
      })
      .catch(err => {
        console.log(err);
      });

      this.getBalance = this.getBalance.bind(this);
      this.addDebit = this.addDebit.bind(this);
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  addDebit = (transaction) => {
    let totalDebits = [...this.state.totalDebits]
    let d = new Date();
    let date = d.toString();
    let newTransaction = {
      'description': transaction.description,
      'amount': parseInt(transaction.amount),
      'date': date
    };
    totalDebits.push(newTransaction);
    this.setState({totalDebits});
  }

  addCredit = (transaction) => {
    let totalCredits = [...this.state.totalCredits]
    let d = new Date();
    let date = d.toString();
    let newTransaction = {
      'description': transaction.description,
      'amount': parseInt(transaction.amount),
      'date': date
    };
    totalCredits.push(newTransaction);
    this.setState({totalCredits});
  }

  getBalance = () => {
    let total = 0;
    let debits = this.state.totalDebits;
    let credits = this.state.totalCredits;

    for(let i = 0; i < debits.length; i++)
      total -= debits[i].amount;

    for(let i = 0; i < credits.length; i++)
      total += credits[i].amount;

    return (Math.floor(total * 100) / 100);
  }

  render(){
    const HomeComponent = () => (<Home accountBalance={this.getBalance()}/>);
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

    const passInDebit = this.state.totalDebits;
    const passInCredit = this.state.totalCredits;

    const DebitsComponent = () => (
      <Debits
        totalDebits={passInDebit}
        accountBalance={this.getBalance()}
        addDebit={this.addDebit} {...this.props}
      />
    )

    const CreditsComponent = () => (
      <Credits
        totalCredits={passInCredit}
        accountBalance={this.getBalance()}
        addCredit={this.addCredit} {...this.props}
      />
    )

    return (
      <Router>
        <div className="App">
          <Route path ="/" exact render = {HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;
