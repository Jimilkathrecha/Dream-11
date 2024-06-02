import React from 'react'
import { Link } from 'react-router-dom'

export default function Refer() {
    return (
        <>
            <div className="min-w-[320px] max-w-[450px] overflow-hidden mx-auto bg-[#192a3c] h-[100dvh] relative">
                <div className="w-100 h-[100vh] absolute top-0 left-0">
                    <img className='w-100 h-100 object-cover ' src="../../IMG/back.png" alt="" />
                </div>
                <div className="w-100 h-[100dvh] relative z-50 select-none flex flex-col justify-end">
                    <div className="w-100 bs-white h-[45vh] rounded-t-[30px] pt-[35px] flex flex-col gap-4 items-center justify-center slide-top">
                        <div className="w-100 h-[50vh] flex items-center justify-center absolute top-0 start-50 translate-middle">
                            <img className='w-[270px] object-cover slide-in-elliptic-top-fwd ' src="../../public/IMG/bull2.png" />
                        </div>
                        <div className="w-100 text-center ">
                            <p className='tx-red text-[25px] font-bold font-Poppins'>Have an Invite Code ?</p>
                        </div>
                        <div className="flex w-100 gap-1 px-4">
                            <Link to="/take-ref" className=' w-50'>
                                <div className="flex w-100 items-center justify-center gap-3 select-none bg-[#fff] active:!bg-[#B40000] hover:!bg-[#B40000] text-[#B40000] active:text-[#fff] hover:text-[#fff] pointer duration-400 border-[2px] border-red rounded-xl !rounded-r-none px-4 py-2">
                                    <p className='font-Outfit text-[15px] select-none font-semibold whitespace-nowrap'>Yes, I've</p>
                                </div>
                            </Link>
                            <Link to="/phone" className=' w-50'>
                                <div className="flex w-100 items-center justify-center gap-3 select-none bg-[#fff] active:!bg-[#B40000] hover:!bg-[#B40000] text-[#B40000] active:text-[#fff] hover:text-[#fff] pointer duration-400 border-[2px] border-red rounded-xl !rounded-l-none px-4 py-2">
                                    <p className='font-Outfit text-[15px] select-none font-semibold whitespace-nowrap'>No, I don't have</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
