import React from 'react';
import './UserInput.css';

const UserInput = (props) => {

    return (
        <div className="UserInput">
            <h4>Please, enter your Name: </h4>
            <input 
                type="text"
                onChange={props.changed}
                value={props.name}
            /> 
            
        </div>
    )

};

export default UserInput;