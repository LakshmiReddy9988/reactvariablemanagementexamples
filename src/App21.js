import React,{useEffect, useRef, useState} from 'react';
import { createStore } from 'redux';
import ErrorHandlingComponent from './ErrorHandlingComponent';
import LanguageContext from './LanguageContext';
import DisplaySelectedLanguage from './DisplaySelectedLanguage';
import ShowSomeMoreVarsFromContext from "./ShowSomeMoreVarsFromContext";
import './App.css';
function App() {  


  //react does not know if defaultValue is an object unless u specify it

  let [defaultValue,setDefaultValue]=useState({});

 
  useEffect(()=>{

    setTimeout(function()
 {

  //fetch().then("")
  console.log("change the context provider value")
  setDefaultValue({ language:"English",var1:"valueOfVar1",var2:"valueOfVar2",var3:[4,5,6],var4:{name:"reactlearner",age:45}});

 }
 ,3000);


  } , [])



const initialState = 0;


//slice is a reducer for reduxjs toolkit library 

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS': {
      return state + (action.payload || 0);
    }
    case 'MINUS': {
      return state - (action.payload || 0);
    }
    default: {
      return state;
    }
  }
};

//shallow/weak reference to the variable in the DOM

let inputRef= useRef();
let input2Ref= useRef();



const store = createStore(counterReducer);

const initialstate = store.getState();

store.dispatch({ type: 'PLUS', payload: 2 });
const dispatch_1 = store.getState();

store.dispatch({ type: 'PLUS', payload: 1 });
const dispatch_2 = store.getState();

store.dispatch({ type: 'MINUS', payload: 2 });
const dispatch_3 = store.getState(); 

function handleInputClick(ref1, ref2, value) {
  ref1.current.focus();
  ref1.current.value = value;
  ref1.current.classList.add('add-background');
  ref2.current.value = '';
  ref2.current.classList.remove('add-background');
}


//1

store.dispatch({ type: 'PLUS', payload: 7 });
const dispatch_4 = store.getState(); 

//8
 
  return (
<ErrorHandlingComponent >

  
   <div>
  <p> Initial state: { initialstate } </p>
  <p> State after +2 payload: { dispatch_1 } </p>
  <p> State after +1 payload: { dispatch_2 } </p>
  <p> State after -2 payload: { dispatch_3 } </p>
  <p> State after 7 payload: { dispatch_4 } </p>

  <button onClick={() => handleInputClick(inputRef, input2Ref, 'input1')}>Focus switch to input1  using ref</button>
  
  
  <button onClick={() => handleInputClick(input2Ref, inputRef, 'input2')}>Focus switch to input2  using ref</button>
  
  
  <button onClick={()=>{throw new Error("Error was thrown") }}>Generate error </button>
  
  <input type="text" ref={inputRef} />
  <input type="text" ref={input2Ref} />
  
</div>

</ErrorHandlingComponent>
/*

import React from 'react';
import { createStore } from 'redux';

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS': {
      return state + (action.payload || 0);
    }
    case 'MINUS': {
      return state - (action.payload || 0);
    }
    default: {
      return state;
    }
  }
};

const add = (payload) => ({ type: 'PLUS', payload });
const subtract = (payload) => ({ type: 'MINUS', payload });

const store = createStore(counterReducer);

const initialstate = store.getState();

store.dispatch(add(2));
const dispatch_1 = store.getState();

store.dispatch(add(1));
const dispatch_2 = store.getState();

store.dispatch(subtract(2));
const dispatch_3 = store.getState();

const App = () => {
  return (
    <div>
      <p> Initial state: { initialstate } </p>
      <p> State after +2 payload: { dispatch_1 } </p>
      <p> State after +1 payload: { dispatch_2 } </p>
      <p> State after -2 payload: { dispatch_3 } </p>
    </div>
  );
};

export default App;

change the css of the input based on the button click 
change the data of the input fields based on the button click
 
    <div>
  <LanguageContext.Provider value={defaultValue}>
    <div className="content">
      <div className="sidebar" />
      <div className="mainContent">
        <DisplaySelectedLanguage />
        <ShowSomeMoreVarsFromContext />
      </div>
    </div> 
    
  </LanguageContext.Provider>
  </div> 

  */

  
  

)

  }

export default App;
