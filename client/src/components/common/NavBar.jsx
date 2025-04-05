import React from 'react'
import { Button } from '../ui/button.jsx'
import { Menu, ShieldCheck, SwitchCamera } from 'lucide-react'
import { Link } from 'react-router-dom'


const NavBar = ({ isAdmin, setIsAdmin }) => {
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
                    {
                        isAdmin && <li className="relative table-cell py-2"><Link className="inline-block relative no-underline after-line" to="/user-status">User Status</Link></li>
                    }
                    <li className="relative table-cell py-2"><Link className="inline-block relative no-underline after-line" to="/station/12345">Poling Station</Link></li>
                    <li className="relative table-cell py-2"><Link className="inline-block relative no-underline after-line" to="/slot">Slots</Link></li>
                    <li className="relative table-cell py-2"><Link className="inline-block relative no-underline after-line" to="/help">Help</Link></li>
                    {
                        isAdmin && <li className="relative table-cell py-2"><Link className="inline-block relative no-underline after-line" to="/request">Request</Link></li>
                    }
                    {
                        isAdmin && <li className="relative table-cell py-2"><Link className="inline-block relative no-underline after-line" to="/profile">Profile</Link></li>
                    }
                </ul>

                {/* Mobile Menu */}
                <Button className="bg-gray-800 hover:bg-gray-700 text-white"
                    onClick={() => setIsAdmin(prev => !prev)}
                >
                    <SwitchCamera className="w-5 h-5" />
                </Button>
            </div>
        </header>
    )
}

export default NavBar