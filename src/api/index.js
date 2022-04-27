import axios from 'axios';

export const login = (email, password) => {
    return axios.post ('http://localhost:5000/api/users/login', {
        email,
        password,
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export const signUp = ({name, email, password}) => {
    return axios.post ('http://localhost:5000/api/users', {
        name,
        email, 
        password,
        headers: { 
            'Content-Type': 'application/json'
        }
    })
}


export const fetchGastos = (token) => {
    return axios.get ('http://localhost:5000/api/gastos', {
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export const createGasto = ({text,cantidad, token}) => {
    return axios.post ('http://localhost:5000/api/gastos', {text,cantidad},
        {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
}
