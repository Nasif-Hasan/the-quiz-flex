import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCart from '../QuizCart/QuizCart';

const Home = () => {
    const topics = useLoaderData()

    return (
        <div>

            <div className="p-6 py-4 dark:bg-red-200 dark:text-gray-900">
                <div className="p-8 sm:p-16">
                    <div className="flex flex-col lg:flex-row">
                        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                            <h2 className="text-center text-6xl tracking-tighter font-bold">Lets Code ... !
                            </h2>
                        </div>
                        <div className="lg:w-1/2">
                            <p className='font-semibold pb-4'>Coding is fun. And when it comes with quiz it will be more intersting and exciting. So let's dive have some fun on Code and Quiz with Quizy Flex</p>
                            <a href="/statics" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block font-bold dark:bg-red-50 hover:bg-red-500 hover:text-white dark:text-gray-900 dark:border-none">Show Statics</a>
                        </div>
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