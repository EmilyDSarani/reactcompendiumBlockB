//normal fetch thing that we have been using in the past. this is grabbing the API information that we will want to render in later
//we want to await the fetch and then await that response in json, then return the characterData. 
export const fetchCharacters = async () => {
    const response = await fetch('http://hp-api.herokuapp.com/api/characters'
    );
    const characterData = await response.json();
    
    return characterData; 
}

export const fetchCharacterHouses = async () => {
    const response = await fetch('http://hp-api.herokuapp.com/api/characters/house/:house');

    const houseTypeData = await response.json();
    const houseTypeMapped = houseTypeData.map((houseType) => houseType.house);
    return houseTypeMapped;
}

