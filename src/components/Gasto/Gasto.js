import React from 'react'
import './Gasto.css';

function Gasto({ text, cantidad}) {
  return (
    <div className="gasto">
      <div className="gasto__texto">
        <p><strong>Nombre gasto:</strong> {text}</p>
        <p><strong>Cantidad:</strong> S/{cantidad}</p>
      </div>
    </div> 
  )
}

export default Gasto;