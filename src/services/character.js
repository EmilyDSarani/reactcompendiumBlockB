export const fetchCharacters = async () => {
    const response = await fetch('http://hp-api.herokuapp.com/api/characters'
    );
    const characterData = await response.json();
    return characterData; 
}


//http://hp-api.herokuapp.com/api/characters/house/:house  to sort by house