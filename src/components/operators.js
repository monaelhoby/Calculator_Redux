import React, {Fragment} from 'react'
import './style.css';

const Operators = props => {
  let operates =[] ;
    for(let i=0 ; i <5 ; i++){
      let operate= []
      let list=["C", "+", "-", "*", "/"];
        operate.push(
          <button onClick={() => props.operate(list[i])} className="btncs">
            {list[i]}
          </button>
        )
        operates.push(
          <Fragment className="operations">{operate}</Fragment>
        )
    }
  return (
    <div>{operates}</div>
  )
}

export default Operators
