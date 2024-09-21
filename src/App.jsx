import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div className='text-color  overflow-x-hidden'>

    
  
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
    
   



    </div>
  )
}

export default App