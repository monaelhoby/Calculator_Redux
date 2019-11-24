import React from 'react';
import './style.css';


const Buttons = props => {
  let elems = [];
    for(let i=0 ; i <4 ; i++){
    let row =[];
    let nums=[[1,2,3], [4,5,6], [7,8,9], [0,"=" , "."]];
    for(let j=0 ; j<3 ; j++){
      row.push(
        <button onClick={() => props.ButtonPressed(nums[i][j])} className="btns" >
          {nums[i][j]}
        </button>
      )
    }
    elems.push(
      <div className="row">{row}</div>
    )
  }
   return (
       <div>
       {elems}
       </div>
   )
}

export default Buttons
