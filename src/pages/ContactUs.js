import React, { useEffect, useState } from 'react'
import Axios from 'axios'


const ContactUs = () => {
const [catFact,setCatFact]= useState("")


useEffect(()=>{
  handlerFacts()
},[])




  const handlerFacts = ()=>{
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact)
      })
  }
  

  
  return (


    <div>
<h1>Contact Us UseEffect is bad </h1>
<button onClick={handlerFacts}>click here</button>
<p>{catFact}</p>
    </div>
  )
}

export default ContactUs