import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <h2>{props.theGood} {props.name}</h2>
            <h3>{props.fruit}</h3> 
            <p>{props.benefits}</p>
        </div>
    )
};

export default UserOutput;