
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import GastosLista from './scenes/GastosLista/GastosLista';
import AuthView from './scenes/AuthView/AuthView';
import {useState} from 'react';
import '../src/App.css';

import Login from '../src/components/Login'
import SignUp from '../src/components/SignUp'




function App() {

  const [token, setToken] = useState(null);

  console.log({token});
 
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
      <Routes>
          <Route path="/" element={<GastosLista token={token}/>}/>
          <Route path="auth" element={<AuthView setToken={setToken}/>}>
            <Route index element={<Login/>}/>
            <Route path="login" element={<Login />}/>
            <Route path="signup" element={<SignUp/>}/>
            </Route>
      </Routes>
      </header>

    </div>
  );
    }

export default App
