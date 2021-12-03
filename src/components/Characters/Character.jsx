import React from 'react'

export default function Character({character}) {
    //I am passing through character up to so that I can take that specific character and deconstruct it. So, I am putting const {name,house, etc} and when I equal it to character, I am essentially saying character.name, character.house but without the mess of it. Now, my return can be prettier. 
    //the only reason that wand is wand.core and wand.wood is because there is an object on wand. 
    const {name, house, ancestry, patronus, wand, image} = character
    return (
        <ul>
         
         <p className="people">
            <img src={image} alt={name}/>
             <h1>Name: {name}</h1>
             <h2>House: {house}</h2>
             <h3>Patronus: {patronus}</h3>
             <p>Ancestry: {ancestry}</p>
             <p>Wand: wood-{wand.wood} core-{wand.core}</p>
         </p>

        </ul>
    )
}
