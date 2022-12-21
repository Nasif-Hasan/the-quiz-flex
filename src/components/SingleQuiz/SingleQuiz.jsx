import React from 'react';
import Options from '../Options/Options';
import { EyeIcon } from '@heroicons/react/24/solid'
import Swal from 'sweetalert2';

const SingleQuiz = ({ quizQuestion }) => {
    const { options, id, question, correctAnswer } = quizQuestion
    function showOnEyeClick() {
        Swal.fire({
            icon: 'info',
            title: 'Right Answer',
            text: `${correctAnswer}`
        })
    }

    return (
        <div className='mx-auto'>
            <div className='border-4 bg-blue-50 border-blue-400 my-8 lg:mx-32 md:mx-16 mx-6 rounded-lg'>
                <div className='relative'>
                    <div className=' justify-item-center mx-8 my-2'>
                        <h2 className='mx-12 mt-6 font-semibold text-2xl'>Quiz: {question.replace(/(<([^>]+)>)/ig, '')} </h2>
                    </div>
                    <EyeIcon onClick={() => showOnEyeClick()} className="absolute top-0 right-10 h-6 w-6 text-blue-500" />
                </div>

                <div className='grid lg:grid-cols-2 md:grid-cols-2 m-4 p-6'>
                    {
                        options.map(option => <Options
                            key={id}
                            option={option}
                            correctAnswer={correctAnswer}
                        ></Options>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleQuiz;