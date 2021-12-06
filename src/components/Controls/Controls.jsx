import React from 'react'
import Filter from '../FilterSort/Filter'
import Sort from '../FilterSort/Sort'

export default function Controls({
    houses, 
    selectedHouse, 
    setSelectedHouse,
    students,
    staff
}) {
    return (
        <div>
            <Filter houses={houses}
            selectedHouse={selectedHouse}
            setSelectedHouse={setSelectedHouse} />
            <Sort students={students}
            staff={staff} />
        </div>
    )
}
