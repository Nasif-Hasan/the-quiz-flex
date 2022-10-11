import React from 'react';
import Swal from 'sweetalert2';

const Options = ({ option, correctAnswer }) => {
    console.log(correctAnswer);
    const correctOption = event => {
        const value = event.target.innerText;
        if (value === correctAnswer) {
            Swal.fire({
                icon: 'success',
                title: 'Right Answer',
                text: `${correctAnswer}`
            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'This is not the right answer. Try again.'
            })
        }
    }

    return (
        <div onClick={(event) => correctOption(event)} className='p-5 border-4 border-red-700 mx-2 my-2 flex justify-between hover:bg-red-300 rounded-lg'>
            {option}
        </div>
    );
};

export default Options;