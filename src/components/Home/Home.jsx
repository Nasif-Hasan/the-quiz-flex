import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCart from '../QuizCart/QuizCart';

const Home = () => {
    const topics = useLoaderData()

    return (
        <div>

            <div className="p-6 py-12 dark:bg-red-400 dark:text-gray-900">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">Lets Code ... ! 
                        </h2>
                        <div className="text-center py-2 lg:py-0">
                            <p>Coding with Quiz is fun. So let's have some fun on Code and Quiz with Quizy Flex</p>
                        </div>
                        <a href="/statics" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block font-bold dark:bg-red-50 hover:bg-red-700 hover:text-white dark:text-gray-900 dark:border-none">Show Statics</a>
                    </div>
                </div>
            </div>


            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 my-10'>
                {
                    topics.data.map(topic => <QuizCart
                        key={topic.id}
                        topics={topic}
                    ></QuizCart>)    
                }
            </div>
        </div>
    );
};

export default Home;