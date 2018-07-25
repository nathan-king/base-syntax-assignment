import React from 'react';

const divStyle = {
    textAlign: 'center'
}

const inputStyle = {
    textAlign: 'center',
    border: '2px solid red'
}

const userInput = (props) => {
    return (
        <div style={divStyle} className='UserInput'>
            <input style={inputStyle} type='text' onChange={props.changed} value={props.username}/>
        </div>
    )
};

export default userInput;