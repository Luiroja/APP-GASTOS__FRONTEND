import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';

import Button from '../../components/Button';
import Imput  from '../../components/Imput';

import {login} from '../../api'



function Login ({setToken}) {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();


    const makeLogin = () => {
        // TODO: Hacer login en API
        //if successful
    login (email, password)
      .then ((res) => {
        const user = res.data
        setToken(user.token)
        navigate('/');
    })
      .catch((err) => {
          console.error(err)
      })// TODO: hacer que esto jale
    } 



    return (
        <div>
            <h2>Iniciar sesión</h2>
         <div className="auth-view__input-container">
            <Imput 
            value = {email} 
            type="email" 
            placeholder = "Ingresa tu correo" 
            onChange={(e) =>setEmail(e.target.value)}
            />
            <Imput 
            value = {password} 
            type="password" 
            placeholder = "Ingresa tu contraseña" 
            onChange={(e) =>setPassword(e.target.value)}
            />
            </div>
            <Button onClick={makeLogin} >Iniciar Sesión</Button> 
            <p>No tienes cuenta <Link className='login' style={{color: 'white'}} to ="/auth/signup" >Regístrate aquí</Link></p>
            </div>
         
    )
}

export default Login;