import React from 'react'
import Character from '../Characters/Character';

export default function CharacterList({characters}) {
   console.log(characters)
    return (
        //this is our map. This is how we are going to graph the characters and render them to the page later on. 
        //I just bring in Character to this page so that I can map through my Character.jsx file to render in each of my characters. So here, I would just need to have character=character. 
        <>
           {characters.map((character) => (
               <Character key={character.name} character={character}/>
           ))} 
        </>
    );
}
