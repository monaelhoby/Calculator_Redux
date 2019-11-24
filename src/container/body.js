

import React, {Component} from 'react';
import Buttons from '../components/buttons.js';
import Operators from '../components/operators.js';
import './style.css';
import {connect} from 'react-redux';


class Body extends Component {

  render () {
    // console.log(this.props);
  return (
    <div className="body-calculator">
      <div className="result">
      <h4 className="resultText">{this.props.value}</h4>
      </div>
    <div className="calculation">
      <p className="calculationText">{this.props.calcVal}</p>
      </div>
    <div className="buttons">
      <div className="numbers">
      <Buttons ButtonPressed={ this.props.ButtonPressed}/>
    </div>
    <div className="operations">
      <Operators operate={this.props.Operate }/>
    </div>
      </div>
    </div>
    )
  }
}

function mapStateToProps (state){
  return {
    value : state.resultVal,
    result : state.calcVal
  }
}

function mapDispatchToProp (dispatch){
  return {
    ButtonPressed : (value) => dispatch({type: 'BUTTONPRESSED',value}),
    Operate : (value) => dispatch({type: 'OPERATOR',value})
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Body);
