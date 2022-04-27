import React from 'react';
import { Trash2 } from 'react-feather';
import '../Gasto/Gasto.css';

function Gasto({ text, cantidad, onDelete}) {
  return (
    <div className="gasto">
      <div className="gasto__texto">
        <p><strong>Nombre gasto:</strong> {text}</p>
        <p><strong>Cantidad:</strong> S/{cantidad}</p>
      </div>
      <div onClick={onDelete} className="gasto__delete">
        <Trash2 />
      </div>
    </div> 
  )
}

export default Gasto;