import React, { useState, useEffect } from 'react'
import AbilitiesList from './AbilitiesList'

const SearchPokemon = () => {

    const [dataAPI, setDataAPI] = useState([])
    
    const [dataInput, setDataInput] = useState("")

    useEffect(() => {
      apiCall()
    }, [])
    
    const apiCall = async () =>{
        const call = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
        const data = await call.json();;
        console.log(data)
        setDataAPI(data)
    }

   

  return (
    <>
    <input onChange={(e)=>{setDataInput(e.target.value)}} value={dataInput}></input>
    <AbilitiesList dataAPI={dataAPI}></AbilitiesList>
    </>
  )
}

export default SearchPokemon