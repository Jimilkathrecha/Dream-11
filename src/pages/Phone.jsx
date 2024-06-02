import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import { useNavigate } from 'react-router-dom';

export default function Phone() {
    const [ageChecked, setageChecked] = useState(true)
    const [tacChecked, settacChecked] = useState(true)
    const navigate = useNavigate();

    const handleroute = () => {
        navigate("/phone-verify")
    }


    return (
        <>
            <div className="min-w-[320px] max-w-[450px] overflow-hidden mx-auto bg-[#192a3c] h-[100svh] relative">
                <div className="w-100 h-[100svh] absolute top-0 left-0">
                    <img className='w-100 h-100 object-cover ' src="../../IMG/back.png" alt="" />
                </div>
                <div className="w-100 h-[100svh] relative z-50 select-none flex flex-col justify-end">
                    <div className="w-100 bs-white h-fit rounded-t-[30px] absolute bottom-0 flex flex-col gap-4 items-center justify-end slide-top">
                        <div className="w-100 flex items-center justify-center absolute top-0 start-50 translate-middle">
                            <img className='w-[270px] object-cover slide-in-elliptic-top-fwd' src="../../IMG/bull.png" />
                        </div>
                        <div className="w-100 pt-[130px] pb-">
                            <div className="flex w-100 items-end justify-center gap-1 px-0 mt-4">
                                <form action="" onSubmit={handleroute}>
                                    <div className="flex items-center px-2 gap-2 mt-2">
                                        <input type="checkbox"  checked={ageChecked} onClick={()=>setageChecked(prevCheck => !prevCheck)} className='accent-green-600 scale-85' required />
                                        <p className='text-[12px] font-semibold font-Outfit text-gray-500'>I certify that I am above 18 years</p>
                                    </div>
                                    <div className="flex items-center px-2 gap-2 mt-2">
                                        <input type="checkbox"  checked={tacChecked} onClick={()=>settacChecked(prevCheck => !prevCheck)} className='accent-green-600 scale-85' required />
                                        <p className='text-[12px] font-semibold font-Outfit text-gray-500'>By continuing, I agree to ABCD's <strong className='!text-gray-700 font-bold'>T&C</strong></p>
                                    </div>
                                    <div className="flex w-100 h-fit mt-3 justify-center relative">
                                        <PhoneInput
                                            required
                                            onEnterKeyPress={handleroute}
                                            country="in"
                                            placeholder='Enter mobile number'
                                            name="mobile"
                                            className="col mx-auto !min-w-[300px] max-w-[100%] md:!max-w-[350px] md:min-w-[300px] focus:outline-none"
                                        />
                                    </div>
                                    <button type='submit' className={`pointer my-4 border-2 mx-auto border-red bg-[#B40000] rounded-full flex items-center justify-center min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px]`}
                                        onSubmit={handleroute}>
                                        <i className="fa-sharp fa-light fa-arrow-right text-[28px] text-[#fff] px-3"></i>
                                    </button>

                                    {/* <button type='submit' onSubmit={handleroute}></button> */}

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
