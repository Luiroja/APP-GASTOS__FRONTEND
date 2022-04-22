
import React, {useState, useEffect} from 'react'
import {fetchGastos, createGasto} from './api'
import './App.css';



function App() {

  const [text, setText]= useState("");
  const [cantidad, setCantidad]= useState("");

  useEffect (()=> {
    fetchGastos()
    .then ((res)=> {
      console.log(res.data);
    })
  })
  const handleOnSubmit =  (e)=> {
    e.preventDefault();
   createGasto(text, cantidad)
  
  }
  
   /* setInput(input.concat({
     _id: "62561dc70054bca384475daf" + Math.floor(Math.random() *10),
     text: event.target.text,
     cantidad: event.target.cantidad
   })) */


  return (
    <div className="App">
       
      <header className="App-header">
      <div className="gasto-input__container">
      <div className ="gastos">
           <h3>Historial de gastos</h3>
           <div>
              <p>{text}</p>
              <p>{cantidad}</p>
          </div>
        
             
           </div>
       <div className="gasto-input">
         <input type="text" className="gasto-input__text" name="text" value= {text} placeholder= "Ingresa un gasto" onChange= {(e)=> setText(e.target.value)}
         />
        </div>
        
         <div className="gasto-input">
         <input type="number" className="gasto-input__number" name="cantidad" value={cantidad} placeholder= "Ingresa la cantidad" onChange= {(e)=> setCantidad(e.target.value)}
         />
       </div>
    
      </div>
        
       
      
      </header>
      

     
  


    </div>
  );
    }

export default App
