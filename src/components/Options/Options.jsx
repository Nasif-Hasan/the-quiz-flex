import React from 'react';

const Options = ({option, correctAnswer}) => {
    const correctoption = event => {
        const value = event.target.innerText;
        if (value === correctAnswer) {

        }
    }

    return (
        <div className='p-5 border-4 border-red-700 mx-2 my-2 flex justify-between hover:bg-red-300 rounded-lg'>
            {option}
        </div>
    );
};

export default Options;