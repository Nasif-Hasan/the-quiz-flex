import React from 'react';
import Options from '../Options/Options';

const SingleQuiz = ({ quizQuestion }) => {
    const { options, id, question, correctAnswer } = quizQuestion

    console.log(quizQuestion);
    return (
        <div>
            <div>
                <h2>Quiz: {question.replace(/(<([^>]+)>)/ig, '')} </h2>

            </div>
            {
                options.map(option => <Options
                    key={id}
                    option={option}
                    correctAnswer={correctAnswer}
                ></Options>)
            }
            <div>

            </div>
        </div>
    );
};

export default SingleQuiz;