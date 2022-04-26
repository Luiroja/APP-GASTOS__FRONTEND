import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';

import Button from '../../components/Button';
import Imput  from '../../components/Imput';

import {signUp} from '../../api';


function SignUp ({setToken}) {
    const [name, setName] = useState("")
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const navigate= useNavigate();
    


    const makeSignUp = () => {
        signUp({name, email, password})
        .then((res) => {
            const user = res.data;
            console.log({user});
        })
        .catch(err => {
            console.error(err)
        })
    } 




    return (
        <div>
            <h2 style={{color:'white'}}>Registro</h2>
         <div className="auth-view__input-container">
            <Imput 
            value = {name} 
            type="text" 
            placeholder = "Ingresa tu nombre" 
            onChange={(e) =>setName(e.target.value)}
            />
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
            <Button onClick={makeSignUp} >Registrar</Button> 
            <p>Ya tienes cuenta <Link className='login' style={{color: 'white'}} to ="/auth/login" >Inicia sesión</Link></p>
            </div>
         
    )
}

export default SignUp;