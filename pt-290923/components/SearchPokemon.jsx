import React, { useState, useEffect } from 'react'
import AbilitiesList from './AbilitiesList'

const SearchPokemon = () => {

    const [dataAPI, setDataAPI] = useState([])
    
    const [dataInput, setDataInput] = useState("")
    
    const apiCall = async (nombrePokemon) =>{
        const call = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
        const data = await call.json();;
        console.log(data.results)
        setDataAPI(data)
    }

   

  return (
    <>
    <input onChange={(e)=>{setDataInput(e.target.value)}} value={dataInput}></input>
    <button onClick={()=>{apiCall(dataInput)}}>buscar</button>
    <AbilitiesList dataAPI={dataAPI}></AbilitiesList>
    </>
  )
}

export default SearchPokemon