import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Language() {

    const [handleSplash, sethandleSplash] = useState(false)
    const [anime, setanime] = useState("")
    const navigate = useNavigate();


    const handlerefercodepage = () => {
        sethandleSplash(true)
        setTimeout(() => {
            setanime("slide-in-fwd-top")
        }, 1000);
        setTimeout(() => {
            navigate("/reference")
        }, 2000);
    }

    return (
        <>
            <div className="min-w-[320px] max-w-[450px] overflow-hidden mx-auto bg-[#192a3c] h-[100dvh] relative">
                <div className="w-100 h-[100vh] absolute top-0 left-0">
                    <img className='w-100 h-100 object-cover ' src="../../IMG/back.png" alt="" />
                </div>

                <div className="w-100 relative z-50 select-none">
                    <div className={`${handleSplash ? "h-[100dvh]" : "h-[50dvh]"}  w-100 duration-1000 flex items-center justify-center  scale-up-tr`}>
                        <img className={`w-[250px] object-cover  ${anime}`} src="../../IMG/bull.png" />
                    </div>
                    <div className={`${handleSplash ? "hidden" : "h-[50dvh]"}  w-100 duration-1000 bs-white  rounded-t-[30px] flex flex-col justify-between slide-t op`}>
                        <div className="flex flex-col items-center justify-center gap-2 px-5 py-4">
                            <label for="english" className='w-100 flex items-center gap-3 duration-1000 border-[2px] border-red rounded-xl px-4 py-3'>
                                <input className='accent-red-600 scale-125' type="radio" id="english" name="language" value="english" />
                                <div className="">
                                    <p className="font-Outfit tx-red text-[23px] font-semibold">English</p>
                                </div>
                            </label>
                            <label for="hindi" className='w-100 flex items-center gap-3 duration-1000 border-[2px] border-red rounded-xl px-4 py-3'>
                                <input className='accent-red-600 scale-125' type="radio" id="hindi" name="language" value="hindi" />
                                <div className="">
                                    <p className="font-Outfit tx-red text-[23px] font-semibold">हिंदी</p>
                                </div>
                            </label>
                            <label for="gujarati" className='w-100 flex items-center gap-3 duration-1000 border-[2px] border-red rounded-xl px-4 py-3'>
                                <input className='accent-red-600 scale-125' type="radio" id="gujarati" name="language" value="gujarati" />
                                <div className="">
                                    <p className="font-Outfit tx-red text-[23px] font-semibold">ગુજરાતી</p>
                                </div>
                            </label>
                        </div>
                        <div className="w-[100%] py-2.5 bg-[#B40000] text-center rounded-t-[20px] active:!bg-[#fff] text-[#fff] active:!text-[#B40000] pointer mx-auto border-2 !border-b-0 border-[#B40000]" onClick={handlerefercodepage}>
                            <p className='font-Outfit text-[22px] font-bold'>Get Started</p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
