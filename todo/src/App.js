
import './App.css';
import React, { useState } from 'react';
import Comp from './Comp.js';

const App=()=>{
  const[inputList, setinputlist]= useState("");
  const[items,setitem]= useState([]);

    

  const itemevent = (event) => {
    setinputlist(event.target.value);
  };

  const listOfItems = () => {
    setitem((olditems) => {
      return [...olditems, inputList];

    });
    setinputlist("");
  };
  const deleteItems = (id) =>{
    console.log("deleted Items");

    setitem((olditems) =>{
      return olditems.filter((arrElement,index) => {
        return index!== id;
      });
    });
  };


  return(
    <>
    <div className="main-div">
      <div className="center_div"> <br />
      <h1 className="heading">ToDoList</h1>
      <br/>
      <br /> 
    
      <input type="text" className="inp" placeholder="Add a item" 
      value={inputList}
      onChange={itemevent} />
      <button onClick={listOfItems}> + </button>
      
      <ol>
        {items.map((itemval,index) => {
         return <Comp key ={index} 
         id={index} 
         text={itemval} 
         onSelect={deleteItems}
         />})}
      </ol>
    
      </div>

     
      
      
     
      </div>
    </>
  )
};

export default App;
