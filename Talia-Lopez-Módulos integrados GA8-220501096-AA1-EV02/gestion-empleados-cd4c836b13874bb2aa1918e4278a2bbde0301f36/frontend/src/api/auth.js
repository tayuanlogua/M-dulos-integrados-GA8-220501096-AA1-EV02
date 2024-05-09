import axios from 'axios'

const API = 'http://localhost:3000/api'

export const registerRequest = name => axios.post(`${API}/empleados`, name)

export const empleados = () => axios.get(`${API}/empleados`)

export const deleteRegister = (_id) => axios.delete(`${API}/empleados/${_id}`)