import React from 'react'

const AbilitiesList = ({dataAPI}) => {

    const abilitiesList = dataAPI?.abilities?.map((actualElement)=>{
        return(
            <>
            <ul>
                <li>{actualElement.ability?.name}</li>
            </ul>
            </>
        )
    })

  return (
    <>
    {abilitiesList}
    </>
  )
}

export default AbilitiesList