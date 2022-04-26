import React from 'react';
import {Outlet} from 'react-router-dom';




function AuthView ({setToken}) {
    
   

    


    return (
        <div className = "auth-view">
           {/*  <div className="auth-view__input-container">
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
            <Button onClick={makeLogin} >Iniciar Sesión</Button> */}
            <Outlet />
        </div>
    )
}

export default AuthView