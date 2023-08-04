import React from 'react'
import Axios from 'axios'
import { useQuery } from "@tanstack/react-query";
const Home = () => {

  const { data :catFact, isLoading, isError,refetch } = useQuery(['cat'], () =>{
    return Axios.get("https://catfact.ninja/fact").then((res) =>res.data)
    })


    if (isLoading) {
      return <p>wait a sec</p>
    }
    
    if (isError) {
      return <p>There is an error</p>
    }
  return (
    <div>
      <h1>This is Home page ReactQuery </h1>
      <p>{catFact?.fact}</p>
      <button onClick={refetch}>No need to useState Here!</button>
    </div>
  )
}

export default Home