
/*
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


ReactDOM.render(<App/>,document.getElementById('root'))

*/


//This is how Reduce is used to manage the state of an aplication
//Action = This tells Your store about changes or events happeing in an application
//Dispatch= This sends of actions to the reducer
//Reducers = They take in state and actions as arguments
//Store = They hold your state

import {createStore} from 'redux';

const reducer=(state,action)=> {
    switch(action.type){
        case 'ADD':
            state=state + action.payload;
            break;
        case 'Substract':
            break;
    }
    return state
};
const store =createStore(reducer,1)
store.subscribe(()=>{
    console.log('store updatated',store.getState())
})
store.dispatch({
    type:'ADD',
    payload:10
});

// Second Exanple Reducers 
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer =Redux.combineReducers({
  auth:authReducer,
  count:counterReducer
});
 // define the root reducer here

const store = Redux.createStore(rootReducer);
