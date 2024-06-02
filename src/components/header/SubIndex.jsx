import React from 'react'

export default function SubIndex({ activeSmBtn, setActiveSmBtn }) {
    return (
        <>
            <div className="w-100 pt-1 shadow-md shadow-red-100">
                <div className="w-[100%] mx-auto flex justify-center border-t-1 border-white select-none">
                    <div className={`${activeSmBtn === "Wining-List" ? "bs-red tx-white" : "bs-white tx-red"}  pointer border-1 border-red col text-center py-2`} onClick={() => setActiveSmBtn("Wining-List")}>
                        <p className='text-[14px] font-Outfit font-semibold'>Wining List</p>
                    </div>
                    <div className={`${activeSmBtn === "Leaderboard" ? "bs-red tx-white" : "bs-white tx-red"}  pointer border-1 border-red col text-center py-2`} onClick={() => setActiveSmBtn("Leaderboard")}>
                        <p className='text-[14px] font-Outfit font-semibold'>Leaderboard</p>
                    </div>
                </div>
            </div>
        </>
    )
}
