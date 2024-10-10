import { useState } from 'react'

import './App.css'

function App() {
  const [query, setQuery] =useState(''); 
  const [size, setSize] =useState('');

  const users = [{
    country:'India',
    population:'125 millions'
  },{
    country:'china',
    population:'120 millions'
  }]
   
  const handleInput = (event)=>{
      const input = event.target.value.toLowerCase();
      setQuery(input)
      const user = users.find((user)=>user.country.toLowerCase() ===input)

      if(user){
        setSize(user.population)
      }
      else{
        setSize("")
      }
  }
  return (
    <>
      <input type="text" value={query} onChange={handleInput}  placeholder='enter your city'/>
      <div>
        {size? <p>size :{size}</p>:"country not found"}
      </div>
    </>
  )
}

export default App
