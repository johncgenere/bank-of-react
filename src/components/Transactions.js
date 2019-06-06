import React, {Component} from 'react';

class Transactions extends Component {
  render(){
    return(
      <div className="four wide column">
        <div className="ui icon message" style={{width: '110%', fontSize: '11px'}}>
          <i className="dollar sign icon"></i>
          <div className="content">
            <div className="header">
              {this.props.amount}
            </div>
            <p>{this.props.description}</p>
            <p>{this.props.date}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Transactions;
