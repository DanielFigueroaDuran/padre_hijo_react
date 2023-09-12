import React, { useState } from 'react'
import "./style.css"
import ComponenteC from './ComponenteC'

const ComponenteB = ({ num }) => {
    const [newNumx, setNewNumx] = useState(num)
    return (
        <div className='componenteB'>
            ComponenteB {newNumx}
            <ComponenteC newNumx={newNumx} setB={setNewNumx} num={num} />
        </div>
    )
}

export default ComponenteB