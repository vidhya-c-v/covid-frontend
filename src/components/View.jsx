import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const View = () => {
    const[data,setData]=new useState([])
    const getData=()=>{
        axios.get("http://localhost:3001/api/covid/view").then(
            (response)=>{
                setData(response.data)

            }
        )
    }
    useEffect( ()=>{getData()},[])
  return (
    <div>
        <NavBar/>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">patientId</th>
      <th scope="col">name</th>
      <th scope="col">age</th>
      <th scope="col">place</th>
      <th scope="col">result</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map(
            (value,index)=>{
                return <tr>
            
                <td>{value.patientId}</td>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>{value.place}</td>
                <td>{value.result}</td>
              </tr>
            }
        )
    }
   
  </tbody>
</table>

    </div>
  )
}

export default View