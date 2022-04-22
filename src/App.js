
import React from 'react';
import GastosLista from './scenes/GastosLista';



function App() {

 
  /*const handleOnSubmit =  (e)=> {
    e.preventDefault();
   createGasto(text, cantidad)
  
  }
   setInput(input.concat({
     _id: "62561dc70054bca384475daf" + Math.floor(Math.random() *10),
     text: event.target.text,
     cantidad: event.target.cantidad
   })) */


  return (
    <div className="App">
       
      <header className="App-header">
      <GastosLista/>
      </header>

    </div>
  );
    }

export default App
