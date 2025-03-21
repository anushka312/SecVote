import React from 'react'

const ElectionProgress = () => {
    return (
        <div className="p-4 mt-4 text-white">
            <h1 className="text-2xl text-center font-semibold mb-6">Election Progress</h1>
            <div className="container">
                <div className="flex flex-col md:grid grid-cols-12 text-gray-50">

                    <div className="flex md:contents">
                        <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                                <i className="fas fa-check-circle text-white"></i>
                            </div>
                        </div>
                        <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                            <h3 className="font-semibold text-lg mb-1">Voter List Out</h3>
                            <p className="leading-tight text-justify w-full">
                                21 July 2024, 04:30 PM
                            </p>
                        </div>
                    </div>

                    <div className="flex md:contents">
                        <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-indigo-600 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-600 shadow text-center">
                                <i className="fas fa-times-circle text-white"></i>
                            </div>
                        </div>
                        <div className="bg-indigo-600 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                            <h3 className="font-semibold text-lg mb-1 text-gray-50">Voting Begins</h3>
                            <p className="leading-tight text-justify">
                                Voting In Progress
                            </p>
                        </div>
                    </div>

                    <div className="flex md:contents">
                        <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
                                <i className="fas fa-exclamation-circle text-gray-400"></i>
                            </div>
                        </div>
                        <div className="bg-gray-400 text-gray-700 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                            <h3 className="font-semibold text-lg mb-1">Election Results</h3>
                            <p className="leading-tight text-justify w-full">
                                21 July 2024, 04:30 PM
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ElectionProgress