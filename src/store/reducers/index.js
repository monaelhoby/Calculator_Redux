
const initState = {
  resultVal : '',
  calcVal : ''
}

const Reducer = ( state = initState , action) => {

// claculate result
 const CalculateResult = () => {
     let text = state.resultVal;
       return {
               calcVal : eval(text),
               resultVal: eval(text)
            }
     }

  //validate operators
   const Validate = () => {
     const text = state.resultVal;
     switch(text.slice(-1)){
       case '+' :
       case '-' :
       case '*' :
       case '/' :
        return false
     }
     return true
   }

  if (action.type === "BUTTONPRESSED"){
    if( action.value == "="){
      return Validate() && CalculateResult()
    }
     return {resultVal: state.resultVal+action.value};
  }
  if (action.type === "OPERATOR"){
    // claculte result after pressed operator
    switch(action.value){
      case 'C' :
      let text = state.resultVal
      text = text.split('')
      text.pop()
        return {resultVal: text.join('')}
         break
      case "+" :
      case "-" :
      case "*" :
      case "/" :
        return {resultVal: state.resultVal + action.value }
    }
  }
      return state
}


export default Reducer ;
