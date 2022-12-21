import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';


const QuizPage = () => {
    const quizs = useLoaderData()
    const { name, questions } = quizs.data

    return (
        <div>

            <div>
                <h2 className='text-6xl py-10 justify-items-center font-bold text-blue-500'>{name}</h2>
            </div>
            {
                questions.map(quizQuestion => <SingleQuiz
                    key={quizQuestion.id}
                    quizQuestion={quizQuestion}
                ></SingleQuiz>)
            }

        </div>
    );
};

export default QuizPage;