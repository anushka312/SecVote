import React from 'react'

const Slider = () => {
    return (
        <div className="w-full">
            <div id="default-carousel" className="relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">
                
                {/* <!-- Carousel wrapper --> */}
                <div className="relative h-80 md:h-96" data-carousel-inner>
                    {/* <!-- Item 1 --> */}
                    <div className=" bg-slate-900 hidden duration-700 ease-in-out" data-carousel-item>
                        <div className='h-full w-full bg-green-50'>
                        </div>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                            className="object-cover w-full h-full" alt="Slide 1" />
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">First Slide</span>
                    </div>
                    {/* <!-- Item 2 --> */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                            className="object-cover w-full h-full" alt="Slide 2" />
                    </div>
                    {/* <!-- Item 3 --> */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                            className="object-cover w-full h-full" alt="Slide 3" />
                    </div>
                </div>

                {/* <!-- Slider indicators --> */}
                <div className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2" data-carousel-indicators>
                    <button type="button" className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
                    <button type="button" className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
                    <button type="button" className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"></button>
                </div>

                {/* <!-- Slider controls --> */}
                <button type="button"
                    className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
                    data-carousel-prev>
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button type="button"
                    className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
                    data-carousel-next>
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>

            <p className="mt-5 text-center text-gray-700 dark:text-gray-300">
                This carousel slider component is part of a larger, open-source library of Tailwind CSS components. Learn more
                by going to the official
                <a className="text-blue-600 hover:underline" href="https://flowbite.com/docs/getting-started/introduction/"
                    target="_blank">
                    Flowbite Documentation
                </a>.
            </p>
        </div>
    )
}

export default Slider