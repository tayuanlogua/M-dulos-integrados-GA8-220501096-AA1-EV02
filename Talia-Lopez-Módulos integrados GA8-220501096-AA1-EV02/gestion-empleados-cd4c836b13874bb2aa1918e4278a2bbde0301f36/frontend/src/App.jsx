import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import AppComponent from './components/AppComponent'
import FormPage from './pages/FormPage'
import EmpleadosPage from './pages/EmpleadosPage'
import PaginaPrincipal from './pages/PaginaPrincipal'




function App() {
  return (
    
    <BrowserRouter>
      <main className=' container mx-auto px-10'>
        <AppComponent/>
          <Routes>
            <Route>
              <Route path='/' element = {<PaginaPrincipal/>}/>
              <Route path='/form' element = {<FormPage/>}/>
              <Route path='/empleados' element = {<EmpleadosPage/>}/>
            </Route>
          </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App