import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import AccountBalance from './AccountBalance';

class Debits extends Component {
  constructor(props){
      super(props);

      this.state = {
        add: false,
        newTransaction: {
          description: '',
          amount: ''
        }
      }

      this.onAdd = this.onAdd.bind(this);
      this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
      this.handleAmountInput = this.handleAmountInput.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleCancel = this.handleCancel.bind(this);

  }

  onAdd = (event) => {
    this.setState({add: true});
  }

  handleCancel = (event) => {
    let resetTransaction = {
                           description: '',
                           amount: ''
                         }
    this.setState({add: false, newTransaction: resetTransaction});
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
    if(this.state.newTransaction.description !== '' || this.state.newTransaction.amount !== ''){
      event.preventDefault();
      this.props.addDebit(this.state.newTransaction)
      this.setState({add: false})
    }
  }

  render(){
    let table=[];
    for(let i = 0; i < this.props.totalDebits.length; i++){
      table.push(<div>
                    <h1 style={{color: 'black'}}>Description: {this.props.totalDebits[i].description}</h1>
                    <h1 style={{color: 'black'}}>Amount: {this.props.totalDebits[i].amount}</h1>
                    <h1 style={{color: 'black'}}>Date: {this.props.totalDebits[i].date}</h1>
                 </div>);

    }

    if(this.state.add){
      return(
        <div>
          <img src={logo} alt="React" className="App-logo" style={{width: '20%', height: '20%'}}/>
          <h1>Bank of React</h1>
          <Link to="/">Go Home</Link>
          <AccountBalance accountBalance={this.props.accountBalance} />
          <form className="ui large form" style={{width: '40%'}}>
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
              <div className="ui fluid large green submit button" onClick={this.handleAdd}>Add</div>
              <div className="ui fluid large red submit button" onClick={this.handleCancel} style={{marginTop: '3%'}}>Cancel</div>
            </div>
          </form>
          {table}
        </div>
      );
    } else {
      return(
        <div>
          <img src={logo} alt="React" className="App-logo" style={{width: '20%', height: '20%'}}/>
          <h1>Bank of React</h1>
          <Link to="/">Go Home</Link>
          <AccountBalance accountBalance={this.props.accountBalance} />
          <button className="ui primary button" onClick={this.onAdd}>
            <i className="plus icon"></i> Add Debit
          </button>
          {table}
        </div>
      );
    }
  }
}

export default Debits;
