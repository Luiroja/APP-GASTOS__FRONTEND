import React from 'react';
import './Button.css';

function Button(props) {
    const {className, children} = props;
    console.log({className});
    return (
        <button 
        className= {`${className}`}
        onClick={() =>console.log('el boton fue presionado')}
       >{children}
       </button>
        
    )
}

export default Button