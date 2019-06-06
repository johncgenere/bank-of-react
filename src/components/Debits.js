import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import AccountBalance from './AccountBalance';

class Debits extends Component {
  constructor(props){
      super(props);

      this.state = {
        newTransaction: {
          description: '',
          amount: ''
        }
      }

      this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
      this.handleAmountInput = this.handleAmountInput.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
  }

  handleDescriptionInput = (e) => {
    let resetTransaction = {
                             description: e.target.value,
                             amount: this.state.newTransaction.amount
                           }
    this.setState({newTransaction: resetTransaction});
  }

  handleAmountInput = (e) => {
    let resetTransaction = {
                             description: this.state.newTransaction.description,
                             amount: e.target.value
                           }
    this.setState({newTransaction: resetTransaction});
  }

  handleAdd = (event) => {
    if(this.state.newTransaction.description !== '' && this.state.newTransaction.amount !== ''){
      event.preventDefault();
      this.props.addDebit(this.state.newTransaction);
    }
  }

  render(){
    let table=[];
    for(let i = 0; i < this.props.totalDebits.length; i++){
      table.push(<tr>
                   <td>{this.props.totalDebits[i].amount}</td>
                   <td>{this.props.totalDebits[i].description}</td>
                   <td>{this.props.totalDebits[i].date}</td>
                 </tr>);
    }

    return(
      <div className="App">
        <div className="App-header">
          <img
            src={logo}
            alt="React"
            className="App-logo"
            style={{width: '20%',
            height: '20%'}}
          />
          <h1 style={{marginTop: '-0.75%'}}>Debits</h1>
          <button className="ui button" style={{marginBottom:'2%'}}>
            <Link to="/">Go Home</Link>
          </button>
          <div style={{display: 'flex', flexDirection: 'row', width: '100%', marginLeft: '35%'}}>
            <AccountBalance accountBalance={this.props.accountBalance} />
            <form className="ui large form" style={{width: '30%', marginLeft: '5%'}}>
              <div className="ui stacked segment">
                <div className="field">
                  <input
                    type="text"
                    name="Description"
                    placeholder="Description"
                    onChange={this.handleDescriptionInput}
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    name="Amount"
                    placeholder="Amount"
                    onChange={this.handleAmountInput}
                  />
                </div>
                <div className="ui fluid large primary button" onClick={this.handleAdd}>
                  <i className="plus icon"></i>Add a Debit
                </div>
                <p style={{color: 'black', textAlign: 'center', marginTop: '5%', fontSize: '15px'}}>
                  The time for the new debit will be the current time.
                </p>
              </div>
            </form>
          </div>
          <table className="ui single line table" style={{width: '95%', marginBottom: '2.5%'}}>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Description</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {table}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Debits;
