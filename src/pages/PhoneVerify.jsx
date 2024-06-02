import { MuiOtpInput } from 'mui-one-time-password-input';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PhoneVerify() {

    const [otp, setOtp] = useState('XXXXXX'); 
    const navigate = useNavigate();

    const handleroute = () => {
        navigate("/home")
    } 

    const handleChange = (newValue) => {
        setOtp(newValue)
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
                            <img className='w-[270px] object-cover slide-in-elliptic-top-fwd ' src="../../IMG/bull.png" />
                        </div>
                        <div className="pt-[130px]">
                            <div className="flex w-100 items-end justify-center gap-1 px-4 mt-4">
                                <form action="" onSubmit={handleroute}>
                                    <MuiOtpInput type='tel'
                                        aria-required
                                        value={otp}
                                        length={6}
                                        placeholder="x"
                                        onChange={handleChange} />
                                    <button onSubmit={handleroute}></button>
                                </form>
                            </div> 
                            <div className="w-[95%] py-2.5 bg-[#B40000] text-center rounded-t-[20px] active:!bg-[#fff] text-[#fff] active:!text-[#B40000] pointer mx-auto border-2 !border-b-0 border-[#B40000]" onClick={handleroute}>
                                <p className='font-Poppins tracking-wider text-[22px] font-bold'>LET'S LEARN</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
