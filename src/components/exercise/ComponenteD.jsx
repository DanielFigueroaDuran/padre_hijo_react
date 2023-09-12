import React from 'react'
import "./style.css"

const ComponenteD = ({ numB, num, setB }) => {
    //console.log(setB);
    const handleClickSubs = () => {
        setB(numB - 1);
    }

    return (
        <div className='container'>
            ComponenteD {numB}
            <button onClick={handleClickSubs}>subs</button>
        </div>
    )
}

export default ComponenteD