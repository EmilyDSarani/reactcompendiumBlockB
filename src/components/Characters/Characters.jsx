import React from 'react'

export default function Characters({characters}) {
    const {name, house, dateOfBirth, patronus, wand, image} = characters 
    return (
        <figure>
         
         <div className="people">
            <img src={image} alt={name}/>
             <h1>{name}</h1>
             <h2>{house}</h2>
             <h3>{patronus}</h3>
             <p>{dateOfBirth}</p>
             <p>{wand}</p>
         </div>

        </figure>
    )
}
