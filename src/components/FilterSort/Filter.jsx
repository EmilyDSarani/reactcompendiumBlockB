import React from 'react'

export default function Filter({ 
    houses, 
    selectedHouse, 
    setSelectedHouse}) {
    return (
      <div> 
        <select 
        value={selectedHouse}
        onChange={(e) => setSelectedHouse(e.target.value)}>
          <option value='all'>All</option>
        {houses.map((house)=> (
            <option key={house} value={house}>{house}</option>
        ))} 
        </select>
        </div>
    );
}
