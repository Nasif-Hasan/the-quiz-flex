import React from 'react';
import { useLoaderData } from 'react-router-dom';


const QuizPage = () => {
    const quizs = useLoaderData()
    console.log(quizs);
    return (
        <div>
            <h1>This is the  quiz page {quizs.data.name}</h1>
        </div>
    );
};

export default QuizPage;