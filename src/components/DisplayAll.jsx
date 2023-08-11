import React, { useEffect, useState } from 'react'

function DisplayAll() {
    const [pokiList, setPokiList] = useState([])
    const [pokimon, setPokimon] = useState('')
   
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res=>res.json())
        .then(data=>setPokiList(data.results))
        .catch(console.error)
    }, [])


    console.log(pokiList)

  return (
    <div>
      <h1>Display All</h1>
      <h3>{pokimon} i choose you!</h3>
      <ul>
        {pokiList.map(ele=><li key={ele.name} onClick={()=>setPokimon(ele.name)}>{ele.name}</li>)}
      </ul>
    </div>
  )
}

export default DisplayAll
