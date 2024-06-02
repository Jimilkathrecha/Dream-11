import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TradingChartModal from '../../components/barChart/TradingChartModal';

export default function ShareBuyAndSell() {

    const [roomnum, setRoomNum] = useState(0);
    const [activeBtn, setActiveBtn] = useState("buy");
    let navigate = useNavigate();
    const roomincNum = () => {
        if (roomnum < 8) {
            setRoomNum(Number(roomnum) + 1);
        }
    };

    const roomdecNum = () => {
        if (roomnum > 0) {
            setRoomNum(roomnum - 1);
        }
    }

    const roomhandleChange = (e) => {
        setRoomNum(e.target.value);
    }

    return (
        <>
            <div className="min-w-[320px] max-w-[450px] mx-auto overflow-hidden h-[100dvh] relative">
                <div className={`w-100 flex justify-between px-3 py-3`}>
                    <div onClick={() => navigate(-1)} className="col flex gap-1 items-center pointer">
                        <i class="fa-regular fa-arrow-left text-[15px]"></i>
                    </div>
                    <div className="col text-center">
                        <p className='text-[15px] tx-red font-bold font-Outfit'>EURUSD</p>
                    </div>
                    <div className="col"></div>
                </div>

                <div className="w-[95%] mx-auto">
                    <div className="flex w-100 relative bg-[#f3f6ff] rounded-md">
                        <div className={`${activeBtn === "sell" ? "bg-[#eb0000] me-auto slide-right" : "bg-[#00b432] ms-auto slide-left"}  left-0 right-0 duration-1000 ease-in-out min-h-[100%] min-w-[50%] max-w-[50%] rounded-md   absolute top-0`}></div>
                        <div className={`${activeBtn === "sell" ? "tx-white" : ""} w-50 text-center py-1 relative z-10 pointer`} onClick={() => setActiveBtn("sell")}>
                            <p className='text-[13px] font-Outfit font-bold '>Sell</p>
                            <p className='text-[10px] font-Outfit '>1.08471</p>
                        </div>
                        <div className={`${activeBtn === "buy" ? "tx-white" : ""} w-50 text-center py-1 relative z-10 pointer`} onClick={() => setActiveBtn("buy")}>
                            <p className='text-[13px] font-Outfit font-bold'>Buy</p>
                            <p className='text-[10px] font-Outfit '>1.08522</p>
                        </div>
                    </div>
                    <div className="col mx-auto min-h-[45px] my-2">
                        <div className="col min-h-[45px] flex items-center rounded-md justify-between px-2 gap-3 bg-[#f3f6ff]">
                            <div className="px-2 py-1.5 pointer active:opacity-50 active:bg-[#cecece] rounded-md" onClick={roomdecNum}>
                                <i className="fa-solid fa-minus text-[11px]"></i>
                            </div>
                            <div className="w-fit flex flex-col items-center justify-center">
                                <p className='text-[10px] font-semibold text-[#848b9d]'>Lot / 1 = 25</p>
                                <input type="number"
                                    className="font-bold bg-[#f3f6ff] py-1 text-center min-w-[25px] col !max-w-[205px] h-[clamp(18px,18px,18px)] flex items-center justify-center focus:outline-none"
                                    value={roomnum}
                                    onChange={roomhandleChange}
                                />
                            </div>
                            <div className="px-2 py-1.5 pointer active:opacity-50 active:bg-[#cecece] rounded-md" onClick={roomincNum}>
                                <i className="fa-solid fa-plus text-[11px]"></i>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-100 px-3 my-4">
                    <div className="col flex flex-col gap-3">
                        <div className="w-100 flex items-center justify-between">
                            <p className='text-[14px] font-semibold font-Outfit'>Monetary equivalent</p>
                            <p className='text-[13px] font-semibold font-Outfit opacity-70'>1000 EUR</p>
                        </div>
                        <div className="w-100 flex items-center justify-between">
                            <p className='text-[14px] font-semibold font-Outfit'>Required margin</p>
                            <p className='text-[13px] font-semibold font-Outfit opacity-70'>----</p>
                        </div>
                        <div className="w-100 flex items-center justify-between">
                            <p className='text-[14px] font-semibold font-Outfit'>Free margin</p>
                            <p className='text-[13px] font-semibold font-Outfit opacity-70'>$ 5,000.00</p>
                        </div>
                    </div>
                </div>

                <div className={`h-[calc(100dvh-293px)] w-100 overflow-hidden`}>
                    <TradingChartModal />
                </div>
            </div>
        </>
    )
}
