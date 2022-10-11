import React from 'react';
import Options from '../Options/Options';

const SingleQuiz = ({ quizQuestion }) => {
    const { options, id, question, correctAnswer } = quizQuestion

    console.log(quizQuestion);
    return (
        <div className='mx-auto'>
            <div className='border-4 bg-red-50 border-red-700 my-8 lg:mx-32 md:mx-16 mx-6 rounded-lg'>
                <div className=' justify-item-center mx-8 my-2'>
                    <h2 className='mx-12 mt-6 font-semibold text-2xl'>Quiz: {question.replace(/(<([^>]+)>)/ig, '')} </h2>
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