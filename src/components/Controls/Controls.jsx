import React from 'react'
import Filter from '../FilterSort/Filter'

export default function Controls({
    houses, 
    selectedHouse, 
    setSelectedHouse
}) {
    return (
        <div>
            <Filter houses={houses}
            selectedHouse={selectedHouse}
            setSelectedHouse={setSelectedHouse} />
        </div>
    )
}
