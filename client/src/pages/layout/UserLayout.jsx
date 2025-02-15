import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'


const UserLayout = () => {

    return (
        <>
            <div className='flex max-h-screen relative'>
                <div className='fixed bg-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-r-[0.25px] border-solid border-white'>
                    Sidebar
                </div>
                <div className='flex-1 mt-12'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default UserLayout;