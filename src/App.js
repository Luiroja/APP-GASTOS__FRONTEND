
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


  return (
    <div className="App">
      <header className="App-header">
      <Routes>
          <Route path="/" element={<GastosLista token={token}/>}/>
          <Route path="auth" element={<AuthView setToken={setToken}/>}>
            <Route index element={<Login setToken={setToken}/>}/>
            <Route path="login" element={<Login setToken={setToken}/>}/>
            <Route path="signup" element={<SignUp/>}/>
            </Route>
      </Routes>
      </header>

    </div>
  );
    }

export default App
