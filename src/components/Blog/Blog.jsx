import React from 'react';


const Blog = () => {
    return (

        <div className='py-8'>

            {/* First Question */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
                <div className="bg-red-100 p-8 rounded shadow-xl sm:p-16">
                    <div className="flex flex-col lg:flex-row">
                        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                What is the purpose of React Router ...?
                            </h2>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="mb-4 text-base text-gray-700">
                            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* // Second Question */}

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
                <div className="bg-red-100 p-8 rounded shadow-xl sm:p-16">
                    <div className="flex flex-col lg:flex-row">
                        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                How does Context API work in React ...?
                            </h2>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="mb-4 text-base text-gray-700">
                                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* // Third Question */}

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
                <div className="bg-red-100 p-8 rounded shadow-xl sm:p-16">
                    <div className="flex flex-col lg:flex-row">
                        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                What is useRef in React...?
                            </h2>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="mb-4 text-base text-gray-700">
                                The useRef is a React Hook. This Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Blog;