
import React, {useState, useEffect} from 'react'
import {fetchGastos} from '../api'
import '../../src/App.css';

import Button from '../components/Button/Button'
import Imput from '../components/Imput/Imput'


function GastoLista () {
    const [text, setText]= useState("");
    const [cantidad, setCantidad]= useState("");
  
    useEffect (()=> {
      fetchGastos()
      .then ((res)=> {
        console.log(res.data);
      })
    })
    return (
        <div className = "gasto-input__container">
        <Imput value={text} placeholder="Ingresa un gasto" type="text" onChange ={(e)=> setText(e.target.value)}/>

       <Imput value={cantidad} placeholder="Ingresa la cantidad" type="text" onChange ={(e)=> setCantidad(e.target.value)}/>
  

       <Button className="gasto-input__button" >Ingresar Tarea</Button>
       </div>
    )
}


export default GastoLista