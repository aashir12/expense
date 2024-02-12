import './input.css'
import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Input = () => {
  var [data,dataFun]=useState({
    name:'',
    amount:''
  })
  function changer(event){
      var {name,value}=event.target;
    dataFun(
      (prev)=>{
        return  {...prev,[name]:value}
      }
    ) 

  }
  function Submit(e){
    e.preventDefault();
     axios.post('http://localhost:8080/',
      data
     )
     data.name='';
     data.amount=''
  }
  return (
   <>
  
 <form className='inputDiv chart' onSubmit={Submit}>
    <input type='text' placeholder='Expense Name' name='name' value={data.name} onChange={changer} required></input>
    <input type='tel' placeholder='Amount' name='amount' value={data.amount} onChange={changer} required></input>
    <button>Add Expense</button>
 </form>
   </>
  )
}

export default Input