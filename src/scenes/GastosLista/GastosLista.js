
import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import {fetchGastos, createGasto, deleteGasto} from '../../api'
import '../../../src/App.css';

import Button from '../../components/Button/Button'
import Imput from '../../components/Imput/Imput'
import Gasto from '../../components/Gasto'


function GastoLista ({token}) { //TODO: recibir el token como props
    const [text, setText]= useState("");
    const [cantidad, setCantidad]= useState("");
    const [gastos, setGastos]= useState([])

    const [loader, setLoader]= useState(false);
    const navigate =useNavigate();


    useEffect (()=> {
      if(!token) {
        navigate("/auth");
      }
    }, [token] );
   
  
    useEffect (()=> { //Mandar token
      setLoader(true);
      fetchGastos(token)
      .then ((res)=> {
        setGastos(res.data)
        setLoader(false);
      })
      .catch((err)=> {
        console.error(err);
      })
    },[])


    
    const addGastos = () => {
      createGasto({text, cantidad, token})
      .then((res) => {
        const gastoCreado = res.data;
        setGastos(gastos.concat(gastoCreado));
        setCantidad('')
        
      })
      .catch((err) => {
        console.error(err);
      })
    }



    const onDeleteGasto = (id) => {
      deleteGasto(id, token)
      .then((res)=> {
       console.log(res.data);
        setGastos(gastos.filter((e)=> e._id !== id))
      })
      .catch ((err)=> {
        console.error(err);
      })
    }



    return (
      <div className="gasto-lista">
        <div className="gasto-input__container">
          <h2>  Bienvenid@ </h2>
        <Imput value={text} placeholder="Ingresa un gasto" type="text" onChange ={(e)=> setText(e.target.value)}/>

       <Imput value={cantidad} placeholder="Ingresa la cantidad" type="number" onChange ={(e)=> setCantidad(e.target.value)}/>
  

       <Button className="gasto-input__button" onClick={addGastos}>Ingresar Tarea</Button>
       </div>
       

        {loader && (<p style={{color: 'white'}}>Cargando ...</p>)}
       {gastos.map((gasto) => (
         <Gasto key={gasto._id} text={gasto.text} cantidad={gasto.cantidad} onDelete= {()=>onDeleteGasto(gasto._id)}/>
       )).reverse()}
       
       </div>
    )
}


export default GastoLista