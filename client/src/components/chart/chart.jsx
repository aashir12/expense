import React, { useEffect, useState } from 'react'
import './chart.css';
import { useParams } from 'react-router-dom'
import Data from '../../Data'
import Input from '../Input/input'
import axios from 'axios'

const Chart = () => {
  var [allData,DataFun]=useState([])
  var {id}=useParams;
  var totalAmount=0;
 
  useEffect(
    ()=>{
      axios.get('http://localhost:8080/').then(
        (res)=>{
          DataFun(res.data)
        }
      )
    }
  )
  function deleter(item){
  //   console.log(item._id)
  axios.post('http://localhost:8080/delete',{_id:item._id})
  }
allData.forEach(
  (item)=>{
     totalAmount+=parseInt(item.amount);
  }
)
  return (
   <>
 
<div className='main'>
<div className='chartCover'>
<Input/>
<div className='chart'>
        <div className='box'>Expense Name</div>
        <div className='box'>Amount</div>
        <div className='box'>Action</div>
    </div>
{
 allData.map(
    (item)=>(

<div className='chart'>
        <div className='box'>{item.name}</div>
        <div className='box'>{item.amount}</div>
        <div className='box'>
          <button onClick={() => deleter(item)}>delete</button>
        </div>
    </div>

  )
 )
}
<div className='total'>
  <h3>Total : {totalAmount}</h3>
</div>
</div>
</div>
    
   </>
  )
}

export default Chart