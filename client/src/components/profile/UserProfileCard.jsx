import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { avatar } from '@/config/index.js'
import { toast } from '@/hooks/use-toast.js'
import { getUserProfile, toggleUserFollow } from '@/store/slices/profileSlice.js'
import { Button } from '../ui/button.jsx'
import NameBox from './ProfileCard/NameBox.jsx'
import Bio from './ProfileCard/Bio.jsx'
import ProfileStats from './ProfileCard/ProfileStats.jsx'
import Loading from '../common/Loading.jsx'


export const UserProfileCard = ({ profile }) => {
    const { isFollowLoading } = useSelector((state) => state.profileSlice)

    const dispatch = useDispatch();

    // ! Handle Toggling User Following
    const handleUserFollow = () => {
        dispatch(toggleUserFollow(profile?._id)).then((data) => {
            dispatch(getUserProfile(profile?.username));
            toast({
                title: profile?.isFollowing ? "Unfollowed" : "Followed"
            })
        })
    }

    return (
        <>
            <div className='w-full border-[1px] border-neutral-300 rounded-lg p-10'>
                {/* // ! For Profile Info */}
                <div className='flex'>
                    {/* // ! Name Section */}
                    <NameBox profile={profile} />

                    {/* // ! Avatar Section */}
                    <div className="relative flex justify-center items-center bg-slate-100 rounded-full bg-gradient-to-tr from-indigo-600 to-pink-600 p-0.5">
                        <Avatar className='cursor-pointer w-28 h-28'>
                            <AvatarImage src={profile?.avatar || avatar} className='object-cover' />
                            <AvatarFallback>{profile?.username || ""}</AvatarFallback>
                        </Avatar>
                    </div>
                </div>

                {/* // ! Bio Section */}
                <Bio profile={profile} />

                {/* // ! For Profile Stats */}
                <ProfileStats profile={profile} />

                {/* // ! For Follow Button */}
                <div className='flex items-center justify-center pt-3'>
                    {
                        !isFollowLoading
                            ?
                            <ProfileButton
                                classname={profile?.isFollowing ? "bg-[#000000] text-white hover:bg-black" : ""}
                                onClick={handleUserFollow}
                            >{profile?.isFollowing ? "UnFollow" : "Follow"}</ProfileButton>
                            :
                            <Loading />
                    }
                </div>
            </div>
        </>)
}


const ProfileButton = ({ children, classname, onClick }) => {
    return (
        <Button onClick={onClick}
            className={`w-full py-1 text-md font-medium text-gray-900 bg-white rounded-xl border border-gray-200 focus:z-10 focus:ring-2 focus:ring-neutral-600 ${classname}`}>{children}</Button>
    )
}

const Spinner = () => {
    return (
        <div role="status" className='w-full max-w-sm flex justify-center items-center'>
            <svg aria-hidden="true" className="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
    )
}
