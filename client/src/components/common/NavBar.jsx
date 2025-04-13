import React from 'react'
import { Button } from '../ui/button.jsx'
import { ArrowLeftRight, Menu, ShieldCheck, SwitchCamera } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAdmin } from '@/store/slices/authSlice.js'


const NavBar = () => {
    const { isAdmin } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleSwitch = () => {
        isAdmin ? dispatch(setIsAdmin(false)) : dispatch(setIsAdmin(true));
    }

    return (
        <header className="w-full bg-[#121212] backdrop-blur-md border-b border-gray-800 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 text-white font-bold text-2xl">
                    <ShieldCheck className="w-6 h-6 text-[#FFD166]" />
                    SecVote
                </div>

                {/* Navigation */}
                <ul className="text-white flex gap-x-12">
                    <li className="relative table-cell py-2"><Link className="inline-block relative no-underline after-line" to="/">Home</Link></li>
                    <li className="relative table-cell py-2"><Link className="inline-block relative no-underline after-line" to="/search">Search</Link></li>
                    {/* {
                        isAdmin && <li className="relative table-cell py-2"><Link className="inline-block relative no-underline after-line" to="/user-status">User Status</Link></li>
                    } */}
                    <li className="relative table-cell py-2"><Link className="inline-block relative no-underline after-line" to="/station/12345">Poling Station</Link></li>
                    <li className="relative table-cell py-2"><Link className="inline-block relative no-underline after-line" to="/slot">Slots</Link></li>
                    <li className="relative table-cell py-2"><Link className="inline-block relative no-underline after-line" to="/help">Help</Link></li>
                    <li className="relative table-cell py-2"><Link className="inline-block relative no-underline after-line" to="/about">About</Link></li>
                    {
                        isAdmin && <li className="relative table-cell py-2"><Link className="inline-block relative no-underline after-line" to="/request">Request</Link></li>
                    }
                    {/* {
                        isAdmin && <li className="relative table-cell py-2"><Link className="inline-block relative no-underline after-line" to="/profile">Profile</Link></li>
                    } */}
                </ul>

                {/* Mobile Menu */}
                <div className='flex gap-2 justify-center items-center'>
                    <Button className="bg-yellow hover:bg-green-600 text-black">
                        {
                            isAdmin ? "Admin View" : "Voter View"
                        }
                        
                    </Button>
                    <div className='bg-red-700 p-2 rounded-full cursor-pointer'
                            onClick={() => handleSwitch()}
                    >
                        <ArrowLeftRight className=' h-6 w-6'/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar