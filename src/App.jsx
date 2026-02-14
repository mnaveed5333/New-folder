import React from 'react'
import { useState } from 'react'

const App = () => {
  const rm={
    backgroundColor:'red',
    color:'white',
    height:'100vh'
  }
  const bm={
    backgroundColor:'blue',
    color:'white',
    height:'100vh'
  }
  const gm={
    backgroundColor:'green',
    color:'white',
    height:'100vh'
  }
  const wm={
    backgroundColor:'white',
    color:'black',
    height:'100vh'
  }
  const [modem,setMode]=useState(rm)
  const mode=(e)=>{
    if(e.target.innerText==='Red'){
      setMode(rm)
    }
    else if(e.target.innerText==='Blue'){
      setMode(bm)
    }
    else if(e.target.innerText==='Green'){
      setMode(gm)
    }
    else if(e.target.innerText==='White'){
      setMode(wm)
    }
  }
  return (
    <div style={modem} className='d-flex flex-column justify-content-center align-items-center'>
        <h1>App</h1>
        <h2>Welcome To React</h2>
        <div className='d-flex justify-content-center space-x-3'>
        <button onClick={mode} className='btn btn-success'>Red</button>
        <button onClick={mode} className='btn btn-primary'>Blue</button>
        <button onClick={mode} className='btn btn-success'>Green</button>
        <button onClick={mode} className='btn btn-light'>White</button>
   </div> </div>
  )
}

export default App