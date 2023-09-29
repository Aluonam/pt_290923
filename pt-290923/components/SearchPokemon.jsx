import React, { useState } from 'react'

const SearchPokemon = () => {

    const [dataAPI, setDataAPI] = useState([])
    
    const [dataInput, setDataInput] = useState("")



  return (
    <>
    <input onChange={(e)=>{console.log(e.target.value)}}></input>
    </>
  )
}

export default SearchPokemon