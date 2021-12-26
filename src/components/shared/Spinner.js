import React from 'react';
import spinner from '../assets/spinner.gif';

function Spinner() {
    return (
        <>
            <img src={spinner} alt="Loading..." style={{width: '100px', backgroundColor: 'transparent', margin: 'auto', display: 'block'}}/>
        </>
    )
}

export default Spinner;




