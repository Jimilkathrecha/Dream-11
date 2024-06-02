import React, { useState } from 'react'
import ProfileModal from '../menu/ProfileModal';

export default function Header() {

    const [profileModal, setProfileModal] = useState(false);

    const handleProfileModal = () => {
        setProfileModal(true)
    }
    const closeProfileModal = () => {
        setProfileModal(false)
    }


    return (
        <>
            <div className="w-100 bs-red">
                <div className="w-100 flex py-3 px-3 items-center justify-between">
                    <div onClick={handleProfileModal} className="w-fit flex items-center gap-3">
                        <div className="bs-white flex rounded-full items-center justify-center min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px]">
                            <i className="fa-solid fa-user tx-red text-[19px]"></i>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className='m-0 tx-white text-[13px] font-semibold '>Welcome</p>
                            <p className='m-0 tx-white text-[14px] font-semibold'>Amigo</p>
                        </div>
                    </div>
                    <div onClick={handleProfileModal} className="bs-white flex rounded-full items-center justify-center min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px]">
                        <i className="fa-solid fa-money-bill-1 tx-red text-[17px]"></i>
                    </div>
                </div>
            </div>


            <ProfileModal profileModal={profileModal} closeProfileModal={closeProfileModal} />
        </>
    )
}
