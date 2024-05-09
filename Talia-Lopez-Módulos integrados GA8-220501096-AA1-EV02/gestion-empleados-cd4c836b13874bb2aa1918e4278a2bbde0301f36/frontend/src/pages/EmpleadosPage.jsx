import {  empleados } from '../api/auth';
import { useEffect, useState} from 'react';
import CardR from '../components/CardR';

function EmpleadosPage() {
  const [register, setRegister] = useState([])

  useEffect(() => {
    const getRegister = async () => {
      try {
        const res = await empleados();
        setRegister(res.data);
        console.log(res.data)
      } catch (error) {
        console.error(error)
      }
    };

    getRegister(); 
  }, []);



 
  return <div className=' grid grid-cols-3 gap-2'>
    {register.map((register) =>(
      <CardR register = {register} key={register._id}/>
    ))}
  </div>
}

export default EmpleadosPage; 