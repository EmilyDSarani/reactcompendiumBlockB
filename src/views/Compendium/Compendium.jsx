import React from 'react'
import {useState} from 'react'

export default function Compendium() {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    if(loading){
        return <h1>Welcome to Hogwarts</h1>;
    }
    

    return (
        <div>
            
        </div>
    )
}
