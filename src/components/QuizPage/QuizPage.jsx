import { list } from 'postcss';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';


const QuizPage = () => {
    const quizs = useLoaderData()
    const { id, logo, name, questions } = quizs.data
    console.log(quizs.data);

    return (
        <div>
            <div>
                <h2 className='text-6xl py-10 justify-items-center font-bold text-red-600'>{name}</h2>
            </div>

            {
                questions.map(quizQuestion => <SingleQuiz
                    key={quizQuestion.id}
                    quizQuestion={quizQuestion}
                ></SingleQuiz>)

            }
            {/* {
                quizs.data.questions.map(options =>
                    options.options.map(option => option))
            } */}

            {/* quiz.question.replace(/(<([^>]+)>)/ig, '') */}



        </div>
    );
};

export default QuizPage;