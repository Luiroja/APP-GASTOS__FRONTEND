import axios from 'axios';

export const fetchGastos = (token) => {
    return axios.get ('http://localhost:5000/api/gastos', {
        headers: { 
            'Authorization': `Bearer ${process.env.REACT_APP_MONGO_DB_TOKEN}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export const createGasto = (text,cantidad) => {
    return axios.post ('http://localhost:5000/api/gastos', {
        text,
        cantidad
    },
    {
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_MONGO}`,
            'Content-Type': 'application/json'
        },
    })
}
