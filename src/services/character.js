//normal fetch thing that we have been using in the past. this is grabbing the API information that we will want to render in later
//we want to await the fetch and then await that response in json, then return the characterData. 
export const fetchCharacters = async () => {
    const response = await fetch('http://hp-api.herokuapp.com/api/characters'
    );
    const characterData = await response.json();
    
    return characterData; 
}

//
export const filterCharactersByHouse = (characters, house) => {
    // const response = await fetch(`http://hp-api.herokuapp.com/api/characters/house/${house}`);
    //this will give me all the houses of the houses I provide...so hard-coding it might make it easier
    // const houseTypeData = await response.json();

    return characters.filter(character => (character.house === house) 
    
    )};

export const fetchStudents = async () => {
    const response = await fetch ('http://hp-api.herokuapp.com/api/characters/students')
    const studentData = await response.json();

    return studentData;
}

export const fetchStaff = async () => {
    const response = await fetch ('http://hp-api.herokuapp.com/api/characters/staff')
    const staffData = await response.json();

    return staffData;
}
