import React, {Component} from 'react';

class AccountBalance extends Component {
  render(){
    return(
      <div className="ui card" style={{width: '30%'}}>
        <div className="content">
          <div className="header" style={{fontSize: '35px', marginTop: '5%'}}>Current Balance</div>
        </div>
        <div className="content">
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <div
                  className="summary"
                  style={{textAlign: 'center',
                          fontSize: '30px',
                          marginTop: '6.25%',
                          marginBottom: '6.25%'}}
                >
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
