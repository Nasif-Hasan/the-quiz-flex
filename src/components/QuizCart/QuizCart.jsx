import React from 'react';
import { Link } from 'react-router-dom';

const QuizCart = ({ topics }) => {

    const { id, name, logo } = topics

    return (
        <div>
            <div className="max-w-xs lg:ml-10 md:ml-8 ml-3 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                
                <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="dark:text-gray-100">This will be so much exciting. Let's go for Quiz with QuizyFlex.</p>
                    </div>

                    <Link to={`/quiz/${id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-bold tracking-wide rounded-md dark:bg-red-100
                    hover:bg-red-500 dark:text-gray-900 hover:text-gray-50">Let's Quiz</button></Link>
                
                </div>
            </div>

        </div>
    );
};

export default QuizCart;