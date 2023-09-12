import React from 'react'
import ComponenteD from './ComponenteD';

const ComponenteC = ({ newNumx, num, setB }) => {

    const handleClick = () => {
        setB(newNumx + 1)
    };

    return (
        <>
            <p>num = {num}</p>
            <button onClick={handleClick}>Add</button>
            <ComponenteD numB={newNumx} num={num} setB={setB} />
        </>
    )
}

export default ComponenteC