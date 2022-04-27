import React from 'react';
import {Outlet} from 'react-router-dom';


function AuthView ({setToken}) {
    
    return (
        <div className = "auth-view">
            <Outlet />
        </div>
    )
}

export default AuthView;