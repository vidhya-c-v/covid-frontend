import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const Add = () => {
    const[input,setInput]=new useState(
        
        {
            "patientId":" ",
            "name":" ",
            "age":" ",
            "place":" ",
            "result":" "
        }
        
    )
    const InputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})

    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/covid/add",input).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    alert("successfully added details!")
                    setInput(
                        {
                            "patientId":" ",
                            "name":" ",
                            "age":" ",
                            "place":" ",
                            "result":" "
                        }
                       
                       

                    )
                }
                else{
                    alert("something went wrong!try again")
                }

            }

        )
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">patientId</label>
                            <input type="text" className="form-control" name="patientId" value={input.patientId} onChange={InputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">name</label>
                            <input type="text" className="form-control" name="name" value={input.name} onChange={InputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">age</label>
                        <input type="text" className="form-control" name="age" value={input.age} onChange={InputHandler} />
                            
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">place</label>
                            <input type="text" className="form-control" name="place" value={input.place} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">result</label>
                            <input type="text" className="form-control" name="result" value={input.result} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Add