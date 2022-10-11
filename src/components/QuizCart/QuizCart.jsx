import React from 'react';
import { Link } from 'react-router-dom';

const QuizCart = ({ topics }) => {
    
    const { id, name, logo, total } = topics




    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-red-100">
                <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="dark:text-red-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-red-100 dark:text-gray-900"><Link to={`/quiz/${id}`}>Let's Quiz</Link></button>
                </div>
            </div>

        </div>
    );
};

export default QuizCart;