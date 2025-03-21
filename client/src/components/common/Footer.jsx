import React from 'react'


const Footer = () => {
    return (
        <>
            <div className="bg-[#121212] border-t-[1px] border-white pt-4">
                <div className="max-w-screen-lg px-4 sm:px-6 text-white sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
                    <div className="p-5">
                        <h3 className="font-bold text-2xl text-white">Secure Vote</h3>
                    </div>
                    <div className="p-5">
                        <div className="text-md uppercase text-white font-bold">Quick Links</div>
                        <a className="my-3 block" href="/#">Poling Station <span className="text-teal-600 text-xs p-1"></span></a><a
                            className="my-3 block" href="/#">Profile <span className="text-teal-600 text-xs p-1"></span></a><a
                                className="my-3 block" href="/#">Search</a>
                    </div>
                    <div className="p-5">
                        <div className="text-md uppercase text-white font-bold">Support</div>
                        <a className="my-3 block" href="/#">Request<span className="text-teal-600 text-xs p-1"></span></a><a
                            className="my-3 block" href="/#">Help<span className="text-teal-600 text-xs p-1"></span></a>
                    </div>
                    <div className="p-5">
                        <div className="text-md uppercase text-white font-bold">Contact us</div>
                        <a className="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA
                            <span className="text-teal-600 text-xs p-1"></span></a><a className="my-3 block" href="/#">contact@company.com
                            <span className="text-teal-600 text-xs p-1"></span></a>
                    </div>
                </div>
            </div>

            <div className="bg-[#121212] pt-2">
                <div className="p-4 text-center text-white border-y-[1px]">© Copyright 2025. All Rights Reserved.</div>

            </div>
        </>
    )
}

export default Footer