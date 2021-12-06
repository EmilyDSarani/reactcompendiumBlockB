import React from 'react'
import {useState, useEffect} from 'react'
import {fetchCharacters} from '../../services/character';
import  CharacterList  from '../../components/CharacterList/CharacterList'
import Controls from '../../components/Controls/Controls';


//Compendium is where the magic is happening
export default function Compendium() {
    const [loading, setLoading] = useState(true); //I am setting a loading state here. The first part will declare the name and the second part declares how it will be impacted. In most cases it seems like it is state
    //it will always be set (as far as we know)
    const [characters, setCharacters] = useState([]);
    //if ' ' is blank then we will just get all the results. whereas if we say 'all' then we will be able to filter
    const [selectedHouse, setSelectedHouse] = useState('all')
    const [filterHouses, setHouses] = useState([])
    const [characterBank, setCharacterBank] = useState([])
    // const [students, setStudent] = useState([]);
    // const [staff, setStaff] = useState([]);
    const houses = ['Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin']
//useEffect is a hook. By using it, you are telling react that you want your component to do something after render. It also runs after every render.
//...maybe...think of it as..."after render", in lieu of mounting. 
//So the different useEffects will have will do specific things but they will ALWAYS do those specific things. 
    useEffect(() => {
    async function getCharacters(){ //this is a function we want to use to grab our characters
        const characterList = await fetchCharacters(); //we are saying that "everytime I say characterList i want it to await my fetchCharacters function (that was created in the characters.js) to get the api of these characters"
        setCharacters(characterList);
        setCharacterBank(characterList)  //we want it to set this list
        setLoading(false); //if the characters load then loading message is false
    }
        getCharacters(); //grab all of our characters
    }, []);
    //show our loading screen as this while the characters are taking time to load

    //this will turn into a Filter by Current house and use the currentHouse state to track in the array.
    useEffect(() => {
        if(!selectedHouse) return;
        
        async function getHouses(){
            if(selectedHouse === 'all')
           { const houseList = await fetchCharacters();
            setHouses(houseList);
           } else {
            const filteredHouseList = characterBank.filter(character => character.house === selectedHouse);  
            setCharacters(filteredHouseList)
        }
        }
        getHouses();
    }, [selectedHouse]
    
    );
    // useEffect(()=> {
    //     if(!students) return;
    //     if(!staff) return;

    //     async function getStudentsAndStaff(){
    //         if(students === 'student'){
    //             const studentList = await fetchStudents(); 
    //             setStudent(studentList);
    //         } else (staff === 'staff'){
    //             const staffList = await fetchStaff()
    //         }
    //     }
    // })

    if(loading){
        return <h1>Dusting the Cauldrons and getting the Brooms ready</h1>;
    }
    // pass state down to CharacterList, this way I can set each of my characters to that state as I map through them. 
    return (
        <div>
            <Controls 
            filterHouses={filterHouses}
            houses={houses}
            selectedHouse={selectedHouse}
            setSelectedHouse={setSelectedHouse}
            // students={students}
            // staff={staff} 
            />
            <CharacterList characters={characters} />
        </div>
    )
}

//offically not allowed to await state change anymore. Ended that with foundations. 


//with sorting- maybe trying doing a .sort function...maybe in a utils file, I can create a function that will sort it based on desc and asc
//character.sort(function(a,b){return a < b})
//maybe see if I can do an if else or in turnery for it? do like "if asc then do this, else do this"
//then I would do a drop down for it. 