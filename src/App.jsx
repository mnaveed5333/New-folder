import React, { useState } from 'react'

const App = () => {
  let dm = {
    color  : "white",
    backgroundColor : "black"
  }
  let lm = {
    color : "black",
    backgroundColor : "white"
  }
  let [num , setNum] = useState(0)
  let [theme , setTheme ] = useState(lm)
  const [message , setMessage] = useState("")
  const inc = () =>{
    setNum(num+1)
  }
    const dec  = () =>{
    if(num>0){
      setNum(num-1)
    }
    else{
      alert("Sorry, Zero limit reached")
    }
  }
  const mode=()=>{
    if(theme.backgroundColor == 'white'){
      setTheme(dm)
      setMessage("Dark Mode Enabled")
    }
    else{
      setTheme(lm)  
      setMessage("Light Mode Enabled")
    }
  }
  return (
   <>
   <div className="main" style={theme}>
    <h1>{message}</h1>
  <div className="box d-flex mx-5 mt-5">
      <button  onClick={inc} className='btn btn-success mx-2'>+ </button>
    <h1>{num}</h1>
    <button onClick={dec} className='btn btn-danger mx-2'>-</button>
    <button onClick={mode}>THEME</button>
  </div>
   </div>
   
   </>
  )
}

export default App