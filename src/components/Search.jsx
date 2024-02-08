import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Search = () => {
    const [input,setInput] = new useState(
        {
            "patientId":""
        }
)
    const [data,setData] = new useState([])


    const inputHandler = (event)=>{
        setInput({...input,[event.target.name]:event.target.value})

    }


    const readValues = ()=>{
        axios.post("http://localhost:3001/api/covid/search",{patientId:input.patientId}).then((response)=>{
            setData(response.data)
        })
    }

  return (
    <div>
      <NavBar />
      <div className="container bg-light">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12
col-xl-12 col-xxl-12">

                <div className="row g-3">

                    <div className="col col-12 col-sm-12 col-md-12
col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">patientId</label>
                        <input type="text" className="form-control"
name="patientId" value={input.patientId} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12
col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success"
onClick={readValues}>CHECK</button>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12
col-lg-12 col-xl-12 col-xxl-12">
                    <h2>TEST-Results</h2>
                    <ul>
                    {
                    data.map((value,index) => {
return <li>
                        <strong>patientId:</strong> {value.patientId}  <br />
                        <strong>name:</strong> {value.name} <br />
                        <strong>age:</strong> {value.age} <br />
                        <strong>place:</strong> {value.place} <br />
                        <strong>result:</strong> {value.result} <br />
                        </li>
                    }
                    )}
                </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Search
