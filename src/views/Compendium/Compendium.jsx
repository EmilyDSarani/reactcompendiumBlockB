import React from 'react'
import {useState, useEffect} from 'react'
import { fetchCharacterHouses, fetchCharacters } from '../../services/character';
import  CharacterList  from '../../components/CharacterList/CharacterList'
import Controls from '../../components/Controls/Controls';


//Compendium is where the magic is happening
export default function Compendium() {
    const [loading, setLoading] = useState(true); //I am setting a loading state here. The first part will declare the name and the second part declares how it will be impacted. In most cases it seems like it is state
    //it will always be set (as far as we know)
    const [characters, setCharacters] = useState([]);
    //if ' ' is blank then we will just get all the results. whereas if we say 'all' then we will be able to filter
    const [selectedHouse, setSelectedHouse] = useState('all')
    const houses = ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin']
//useEffect is a hook. By using it, you are telling react that you want your component to do something after render. It also runs after every render.
//...maybe...think of it as..."after render", in lieu of mounting. 
//So the different useEffects will have will do specific things but they will ALWAYS do those specific things. 
    useEffect(() => {
    async function getCharacters(){ //this is a function we want to use to grab our characters
        const characterList = await fetchCharacters(); //we are saying that "everytime I say characterList i want it to await my fetchCharacters function (that was created in the characters.js) to get the api of these characters"
        setCharacters(characterList);  //we want it to set this list
        setLoading(false); //if the characters load then loading message is false
    }
        getCharacters(); //grab all of our characters
    }, []);
    //show our loading screen as this while the characters are taking time to load

    //this will turn into a Filter by Current house and use the currentHouse state to track in the array.
    useEffect(() => {
        async function getHouses(){
            const houseList = await fetchCharacterHouses();
            // setHouses(houseList);
            // setLoading(false);
            
        }
        getHouses();
    }, []);

    if(loading){
        return <h1>Welcome to Hogwarts</h1>;
    }
    // pass state down to CharacterList, this way I can set each of my characters to that state as I map through them. 
    return (
        <div>
            <Controls 
            houses={houses}
            selectedHouse={selectedHouse}
            setSelectedHouse={setSelectedHouse} />
            <CharacterList characters={characters} />
        </div>
    )
}

//offically not allowed to await state change anymore. Ended that with foundations. 
