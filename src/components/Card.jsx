import React from 'react'
import './Card.css'

export const Card = ({imgCharacter, nameCharacter, genderCharacter}) => {
  return (
    <>
    <section>
    <div className='card'>
        <img alt={nameCharacter} src={imgCharacter}/>
        <h1>{nameCharacter}</h1>
        <p>{genderCharacter}</p>
        
      </div>
    </section>
    
    </>
  )
}
