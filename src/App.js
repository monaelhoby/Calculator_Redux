import React, {Component} from 'react';
import './App.css';
import Body from './container/body.js';
import {createStore} from 'redux';
import Reducer from './store/reducers';
import {Provider} from 'react-redux';


const store = createStore(Reducer);

class App extends Component {

  render (){
  return (
    <div className="container">
      <Provider store={store}>
      <Body />
      </Provider>
    </div>
  );
}

}

export default App;
