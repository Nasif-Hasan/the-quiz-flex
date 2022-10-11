import React from 'react';

const Options = ({option, correctAnswer}) => {
    const correctoption = event => {
        const value = event.target.innerText;
        if (value === correctAnswer) {
            
        }
    }

    return (
        <div>
            {option}
        </div>
    );
};

export default Options;