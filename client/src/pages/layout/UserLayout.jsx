import NavBar from '@/components/common/NavBar.jsx';
import Footer from '@/components/common/Footer.jsx';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'


const UserLayout = () => {
    const [isAdmin, setIsAdmin] = useState(true);
    return (
        <>
            <div className='flex flex-col relative'>
                <div className='z-10000 '>
                    <NavBar isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
                </div>
                <div className='bg-green-600 flex-1'>
                    <Outlet  isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default UserLayout;