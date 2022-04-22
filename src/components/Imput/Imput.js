import React from 'react';
import './Imput.css'

function Imput ({className,value, placeholder, onChange, type}) {
    return(
        <div className={`gasto-input ${className}`}>
         <input type={type} className="gasto-input__text" name="text" value= {value} placeholder= {placeholder} onChange={onChange}
         />
        </div>
    )
}

export default Imput