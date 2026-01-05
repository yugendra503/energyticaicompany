import React, { useEffect, useState } from 'react'
import axios from 'axios'
const CrudGet = () => {
   const[data,setData]=useState([])
  useEffect(()=>{
    axios.get(`https://backendenergyticai.vercel.app/crud`)
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>{
      alert("Error Fetching offers")
    })
  })

  


  return (
      <main>
       
               <section>
                   <div className='container'>
                       <div className='row'>
                           <div className='col-md-12'>
                               <h1 className='p-3'>Crud Data</h1>
                           </div>
                       </div>
                   </div>
               </section>

             <section>
  <div className="container">
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <div className="table-responsive">
        <table className="table table-hover mb-0">
         <thead>
  <tr
    style={{
      backgroundColor: "#f3f4f6",
      borderBottom: "2px solid #e5e7eb",
    }}
  >
    <th
      style={{
        fontSize: "0.85rem",
        fontWeight: "600",
        color: "#374151",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
      }}
    >
      Course Name
    </th>

    <th
      style={{
        fontSize: "0.85rem",
        fontWeight: "600",
        color: "#374151",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
      }}
    >
      Description
    </th>

    <th
      style={{
        fontSize: "0.85rem",
        fontWeight: "600",
        color: "#374151",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
      }}
    >
      Instructor
    </th>
  </tr>
</thead>

          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td
                  style={{
                    fontSize: "0.9rem",
                    color: "#1f2937",
                    verticalAlign: "middle",
                  }}
                >
                  {item.coursename}
                </td>

                <td
                  style={{
                    fontSize: "0.9rem",
                    color: "#1f2937",
                    verticalAlign: "middle",
                  }}
                >
                  {item.description}
                </td>

                <td
                  style={{
                    fontSize: "0.9rem",
                    color: "#1f2937",
                    verticalAlign: "middle",
                  }}
                >
                  {item.instructor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>



               </main>
  )
}

export default CrudGet