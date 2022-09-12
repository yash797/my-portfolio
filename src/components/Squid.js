import React, { useEffect, useState } from 'react'
import squids from "../images/squids.png";
import Loader from "../components/loader";

const Squid = () => {
  const [loading, setLoading] = useState(false)
 useEffect(()=>{setTimeout(() => {
    setLoading(true)
 }, 4000);})
  return (
    <div>
    {loading===false ?
    <div className=' h-screen w-0'> <Loader/> </div>: 
    <div className='h-[80px] w-full'>
      <img src= {squids}/>
    </div> }</div>
  )
}

export default Squid
