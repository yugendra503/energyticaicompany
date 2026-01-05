import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditCrud = () => {
  const [coursename, setCoursename] = useState("")
  const [description, setDescription] = useState("")
  const [instructor, setInstructor] = useState("")

  const { sid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://backendenergyticai.vercel.app/crud/${sid}`)
      .then((res) => {
        setCoursename(res.data.coursename)
        setDescription(res.data.description)
        setInstructor(res.data.instructor)
      })
      .catch((err) => {
        alert("Error Fetching Data")
      })
  }, [])

  const updateCrudData = (e) => {
    e.preventDefault()
    axios.put(`https://backendenergyticai.vercel.app/crud/${sid}`, {
      coursename,
      description,
      instructor,
    })
      .then((res) => {
        alert("Offer Updated Successfully")
        navigate("/admindashboard/deletecrud")
      })
      .catch((err) => {
        alert("Error while Updating data")
      })
  }

  return (
    <main >

      <section >
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1>Edit Data</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mx-auto' >

              <div >
                <form onSubmit={updateCrudData}>
                  <div className='mb-3'>

                    <input

                      type='text'
                      name='coursename'
                      placeholder='coursename'
                      className='form-control'
                      value={coursename}
                      onChange={
                        (e) => setCoursename(e.target.value)
                      }
                    />

                  </div>

                  <div className='mb-3'>

                    <input

                      type='text'
                      name='description'
                      placeholder='description'
                      className='form-control'
                      value={description}
                      onChange={
                        (e) => setDescription(e.target.value)
                      }
                    />

                  </div>




                  <div className='mb-3'>
                    <input
                      type='text'
                      name='instructor'
                      placeholder='instructor'
                      className='form-control'
                      value={instructor}
                      onChange={
                        (e) => setInstructor(e.target.value)
                      }
                    /> </div>



                  <div className='mb-3'>

                    <input
                      type='submit'
                      value='Update Data'
                      className='btn btn-success' />

                  </div>

                </form>



              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default EditCrud