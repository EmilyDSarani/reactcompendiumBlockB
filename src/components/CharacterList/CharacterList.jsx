import React from 'react'

export default function CharacterList({characters}) {
   console.log(characters)
    return (
        //this is our map. This is how we are going to graph the characters and render them to the page later on. 
        <>
           {characters.map((character) => (
               <li key={character.character}>{character.character}</li>
           ))} 
        </>
    );
}
