
import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import {fetchGastos} from '../../api'
import './../../../src/App.css';

import Button from '../../components/Button/Button'
import Imput from '../../components/Imput/Imput'


function GastoLista ({token}) { //TODO: recibir el token como props
    const [text, setText]= useState("");
    const [cantidad, setCantidad]= useState("");
    const navigate =useNavigate();


    useEffect (()=> {
      if(!token) {
        navigate("/auth");
      }
    }, [token] );
   
  
    useEffect (()=> { //Mandar token
      fetchGastos(token)
      .then ((res)=> {
        console.log(res.data);
      })
    })
    return (
        <div className = "gasto-input__container">
          <h2>  Bienvenide </h2>
        <Imput value={text} placeholder="Ingresa un gasto" type="text" onChange ={(e)=> setText(e.target.value)}/>

       <Imput value={cantidad} placeholder="Ingresa la cantidad" type="text" onChange ={(e)=> setCantidad(e.target.value)}/>
  

       <Button className="gasto-input__button" >Ingresar Tarea</Button>
       </div>
    )
}


export default GastoLista