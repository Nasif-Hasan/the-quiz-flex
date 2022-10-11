import { list } from 'postcss';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';


const QuizPage = () => {
    const quizs = useLoaderData()
    const { logo, name, question } = quizs.data
    console.log(quizs.data);

    return (
        <div>
            <div>         
                <h2 className='text-6xl py-10 justify-items-center font-bold text-red-600'>{name}</h2>
            </div>

            {
                quizs.data.questions.map(quiz => quiz.question.replace(/(<([^>]+)>)/ig, ''))

            }
            {
                quizs.data.questions.map(options =>
                    options.options.map(option => option))
            }





        </div>
    );
};

export default QuizPage;