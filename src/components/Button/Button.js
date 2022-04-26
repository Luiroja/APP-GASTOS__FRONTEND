import React from 'react';
import '../Button/Button.css';

function Button(props) {
    const {className, children, onClick} = props;
    
    return (
        <button 
        className= {`${className} button`}
        onClick={onClick}
       >{children}
       </button>
        
    )
}

export default Button