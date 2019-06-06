import React, {Component} from 'react';

class AccountBalance extends Component {
  render(){
    return(
      <div className="ui card" style={{width: '20%'}}>
        <div className="content">
          <div className="header" style={{fontSize: '25px'}}>Current Balance</div>
        </div>
        <div className="content">
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <div className="summary" style={{textAlign: 'center', fontSize: '20px'}}>
                   {this.props.accountBalance}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountBalance;
