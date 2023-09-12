import React from 'react'
import "./style.css"
import ComponenteD from './ComponenteD';

const ComponenteC = ({ newNumx, num, setB }) => {

    const handleClick = () => {
        setB(newNumx + 1)
    };

    return (
        <div className='containerC'>
            <p>num = {num}</p>
            <button onClick={handleClick}>Add</button>
            <ComponenteD numB={newNumx} num={num} setB={setB} />
        </div>
    )
}

export default ComponenteC