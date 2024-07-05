import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Pages from '../pages/exports'

const Router = () => {
  return (
    <>
     <Routes>
     <Route path='/' element={<Pages.Home/>}/>
     <Route path='/login' element={<Pages.Login/>}/>
     <Route path='/register' element={<Pages.Register/>}/>
     <Route path='/lawyer-profile' element={<Pages.Profile/>}/>
     
     </Routes> 
    </>
  )
}

export default Router
