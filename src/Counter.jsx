import React from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './Redux/slice.js/counterSlice'
import {useState}from  'react'

function Counter() {
  const count = useSelector((state)=>state.counterReducer.count)
  const dispatch = useDispatch()
  const[amount,setAmount]= useState("")
  const handleIncrement=()=>{
    if(amount=="")
      {
        alert("please provide value")
      }
      dispatch(incrementByAmount(Number(amount)))
    
  }
  console.log(amount)
  return (
    <div>
      <h1 className='text-danger fw-bolder text-center mt-5'>Counter application</h1>
      <div className="container border mt-5 p-5bd-flex justify-content-center">
      <h1 className='fw-bolder text-center mt-5 fs-1' style={{fontSize:'50px'}}>{count}</h1>
      <div className="d-flex justify-content-evenly align-items-center mt-5">
        <button className="btn btn-success" onClick={()=>dispatch(increment())}>
Increment
        </button>
        <button className="btn btn-danger" onClick={()=>dispatch(reset())}>
Reset
        </button>
        <button className="btn btn-warning" onClick={()=>dispatch(decrement())}>
Decrement
        </button>
      </div>
      <div className="d-flex mt-5 mb-5" >
        <input type="text" className="form-control" placeholder='enter amount to be incremented'  value={amount||" "} onChange={e=>setAmount(e.target.value)} />
        <button className="btn btn-primary ms-3" onClick={handleIncrement}
        >Increment Amount</button>
      </div>
      </div>
     
    </div>
  )
}

export default Counter
