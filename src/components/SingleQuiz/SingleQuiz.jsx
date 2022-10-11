import React from 'react';

const SingleQuiz = ({quiz}) => {
    console.log(quiz);
    return (
        <div>
            <h2>This is question {quiz.name}</h2>
        </div>
    );
};

export default SingleQuiz;