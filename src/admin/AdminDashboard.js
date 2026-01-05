import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Store } from '../App'
import axios from 'axios'
import Adminsidebar from './Adminsidebar'

const AdminDashboard = () => {
  const [token, setToken] = useContext(Store)
  const [data, setData] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://backendenergyticai.vercel.app/admindashboard`, {
      headers: {
        "x-token": token,
      },
    })
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })

  if (!token) {
    navigate("/login");
  }

  return (
    <main >

      <section >
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='text-center p-2'>{data} Admin  Dashboard</h1>
            </div>
          </div>
        </div>
      </section>

      <section className=' container-fluid py-5 '>
        <div className="">
          <div className='row '>
            <div className='col-md-3 '>
              <Adminsidebar />
            </div>

            <div className='col-md-9'>
              <Outlet />
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}

export default AdminDashboard