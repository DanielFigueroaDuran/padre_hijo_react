import { React, useState } from 'react'
import ComponenteB from './ComponenteB';


const ComponenteA = () => {
    const [x, setX] = useState(42);
    return (
        <div className='container'>
            <p>X = {x}</p>
            <ComponenteB num={x} />
        </div>
    )
}

export default ComponenteA