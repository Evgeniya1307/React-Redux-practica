import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

const defaultState = {
  cash:0
}
const reducer=(statdefaultState,action)=> {
  switch(action.type)
{
case 'ADD_CASH' :
   return {...statdefaultState, cash:state.cash+action.payload}

case  'GET_CASH' :
   return{...state, cash: state.cash-action.payload}
   default:
       return state
}   }

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById('root')
);


