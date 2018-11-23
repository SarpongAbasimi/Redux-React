

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


ReactDOM.render(<App/>,document.getElementById('root'))




/*
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

*/