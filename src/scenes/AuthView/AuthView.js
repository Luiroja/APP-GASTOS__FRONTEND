import React from 'react';
import {Outlet} from 'react-router-dom';
import '../AuthView/AuthView.css'


function AuthView ({setToken}) {
    
    return (
        <div className = "auth-view">
            <Outlet />
        </div>
    )
}

export default AuthView;