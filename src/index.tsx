import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';

const defaultState = {
  cash:0,
}

const action = {type:"", payload:""}

const reducer = (state = defaultState, action: string) =>{
    switch(action.type){
      case "ADD_CASH":
          return{...state, cash: state.cash + action}
      case "GET_CASH":

      default:
        return state

    }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
