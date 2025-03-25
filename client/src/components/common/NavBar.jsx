import React from 'react'

const NavBar = () => {
    return (
        <nav class="bg-[#121212] flex justify-between items-center px-12 py-4 w-screen border-white border-b-[1px]">
            <div className='text-white font-bold tracking-wide text-3xl'>SecureVote</div>
            <ul class="text-white flex gap-x-12">
                <li class="relative table-cell py-2"><a class="inline-block relative no-underline after-line" href="/">Home</a></li>
                <li class="relative table-cell py-2"><a class="inline-block relative no-underline after-line" href="/profile">Profile</a></li>
                <li class="relative table-cell py-2"><a class="inline-block relative no-underline after-line" href="/search">Search</a></li>
                <li class="relative table-cell py-2"><a class="inline-block relative no-underline after-line" href="/station/12345">Poling Station</a></li>
                <li class="relative table-cell py-2"><a class="inline-block relative no-underline after-line" href="/slot">Slots</a></li>
                <li class="relative table-cell py-2"><a class="inline-block relative no-underline after-line" href="/request">Request</a></li>
                <li class="relative table-cell py-2"><a class="inline-block relative no-underline after-line" href="/help">Help</a></li>
            </ul>
        </nav>
    )
}

export default NavBar