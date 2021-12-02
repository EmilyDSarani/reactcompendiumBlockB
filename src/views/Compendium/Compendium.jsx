import React from 'react'
import {useState, useEffect} from 'react'
import { fetchCharacters } from '../../services/character';

export default function Compendium() {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
    async function getCharacters(){
        const characterList = await fetchCharacters();
        setCharacters(characterList);  
    }
        getCharacters();
    }, []);

    if(loading){
        return <h1>Welcome to Hogwarts</h1>;
    }
    

    return (
        <div>
            
        </div>
    )
}
