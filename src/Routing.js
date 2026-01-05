import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CrudGet from './project/CrudGet'
import Login from './admin/Login'
import Register from './admin/Register'
import AdminDashboard from './admin/AdminDashboard'
import AddCrud from './admin/AddCrud'
import DeleteCrud from './admin/DeleteCrud'
import EditCrud from './admin/EditCrud'


const Routing = () => {
  return (
    <Routes>

      <Route path='/' element={<CrudGet />} />
      <Route path='/register' element={<Register />} />


      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/admindashboard' element={<AdminDashboard />}>


        <Route path='' element={<AddCrud />} />
        <Route path='deletecrud' element={<DeleteCrud />} />

      </Route>
      <Route path='/editcrud/:sid' element={<EditCrud />} />


    </Routes>
  )
}

export default Routing