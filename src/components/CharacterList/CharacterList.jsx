import React from 'react'

export default function CharacterList({characters}) {
   console.log(characters)
    return (
        <>
           {characters.map((character) => (
               <h1 key={character.character}>{character.character}</h1>
           ))} 
        </>
    );
}
