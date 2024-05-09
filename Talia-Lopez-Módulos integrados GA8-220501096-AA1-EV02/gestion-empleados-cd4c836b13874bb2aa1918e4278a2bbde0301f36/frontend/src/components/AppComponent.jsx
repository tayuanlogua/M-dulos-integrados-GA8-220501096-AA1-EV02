import React from 'react'
import {Link} from 'react-router-dom'

function AppComponent() {
  return (
    <nav className=' m-2 rounded-lg bg-zinc-700 flex justify-between py-4 items-center '>
            <div>
            <Link to="/" className= ' px-10 text-slate-300 font-semibold text-2xl  ' >GESTIÓN DE EMPLEADOS</Link>
            </div>
           <div className='text-indigo-500 mx-3'>
           <Link to= '/form' className='rounded-lg mx-2 px-3 py-2 bg-slate-200 border-b-2'>Registrar empleado</Link >
            <Link to= '/empleados' className='rounded-lg mx-2 px-3 py-2 bg-slate-200 border-b-2' >Empleados</Link >
           </div>
        


    </nav>
  )
}

export default AppComponent;