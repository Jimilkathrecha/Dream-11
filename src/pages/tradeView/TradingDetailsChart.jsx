import React, { useState } from 'react'
import TradingChartModal from '../../components/barChart/TradingChartModal'
import BottomBar from '../../components/menu/BottomBar';
import { Link, useNavigate } from "react-router-dom";

export default function TradingDetailsChart() {

    const [roomnum, setRoomNum] = useState(0);
    const [activeChartTimeLine, setActiveChartTimeLine] = useState("");
    const [fullChartView, setFullChartView] = useState(false);
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
            <div className="min-w-[320px] max-w-[450px] mx-auto pb-[100px] overflow-hidden h-[100dvh] relative ">
                <div className={`${fullChartView ? "hidden" : ""} flex items-center justify-between py-1 sticky top-0 bs-white border-b-1`}>
                    <div onClick={() => navigate(-1)} className="h-[clamp(40px,40px,40px)] w-[clamp(40px,40px,40px)] flex items-center justify-center text-[#848b9d] pointer">
                        <i class="fa-solid fa-arrow-left text-[18px]"></i>
                    </div>  
                </div>
                {/* <div className={`${fullChartView ? "hidden" : ""} flex items-center justify-between py-1 sticky top-0 bs-white border-b-1`}>
                    <div onClick={() => navigate(-1)} className="h-[clamp(40px,40px,40px)] w-[clamp(40px,40px,40px)] flex items-center justify-center text-[#848b9d] pointer">
                        <i class="fa-solid fa-arrow-left text-[18px]"></i>
                    </div>
                    <div className="col text-center flex flex-col justify-center items-center">
                        <p className='text-[13px] font-bold font-Outfit '>₹ 5,000.00</p>
                        <div className="flex gap-1 items-center text-[#848b9d]">
                            <p className='text-[10px] font-semibold'>9834656934</p>
                            <i class="fa-solid fa-chevron-down text-[8px]"></i>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center px-2">
                        <div className="">
                            <i class="fa-regular fa-star text-[#848b9d] text-[17px]"></i>
                        </div>
                        <div className="">
                            <i class="fa-regular fa-circle-info text-[#848b9d] text-[17px]"></i>
                        </div>
                    </div>
                </div> */}
                <div className={`${fullChartView ? "h-[calc(100dvh-43px)]" : "h-[calc(100dvh-100px)]"}`}>
                    <div className={`${fullChartView ? "" : "hidden"}  flex justify-between px-3 py-2.5`}>
                        <div onClick={() => setFullChartView(false)} className="col flex gap-1 items-center pointer">
                            <i class="fa-solid fa-angle-left text-[15px]"></i>
                            <p className='text-[14px] font-semibold font-Outfit'>Back</p>
                        </div>
                        <div className="col">
                            <p className='text-[15px] tx-red font-bold font-Outfit'>Full Chart View</p>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className={`${fullChartView ? "h-[100%]" : "h-[calc(100dvh-310px)]"}  w-100 relative overflow-hidden`}>
                        <TradingChartModal interval={activeChartTimeLine}/>
                        <div className="w-[70%] absolute bottom-0 start-50 translate-middle flex justify-between select-none">
                            <div className={`${activeChartTimeLine === "1" ? "bs-green tx-white":"bs-white text-[#a4a4a4]"}  px-2 py-1 rounded-md `} onClick={() => setActiveChartTimeLine("1")}>
                                <p className='text-[9px] font-Outfit font-semibold'>1M</p>
                            </div>
                            <div className={`${activeChartTimeLine === "5" ? "bs-green tx-white":"bs-white text-[#a4a4a4]"}  px-2 py-1 rounded-md `} onClick={() => setActiveChartTimeLine("5")}>
                                <p className='text-[9px] font-Outfit font-semibold'>5M</p>
                            </div>
                            <div className={`${activeChartTimeLine === "30" ? "bs-green tx-white":"bs-white text-[#a4a4a4]"}  px-2 py-1 rounded-md `} onClick={() => setActiveChartTimeLine("30")}>
                                <p className='text-[9px] font-Outfit font-semibold'>30M</p>
                            </div>
                            <div className={`${activeChartTimeLine === "120" ? "bs-green tx-white":"bs-white text-[#a4a4a4]"}  px-2 py-1 rounded-md `} onClick={() => setActiveChartTimeLine("120")}>
                                <p className='text-[9px] font-Outfit font-semibold'>2H</p>
                            </div>
                            <div className={`${activeChartTimeLine === "D" ? "bs-green tx-white":"bs-white text-[#a4a4a4]"}  px-2 py-1 rounded-md `} onClick={() => setActiveChartTimeLine("D")}>
                                <p className='text-[9px] font-Outfit font-semibold'>1D</p>
                            </div>
                            <div className={`${activeChartTimeLine === "W" ? "bs-green tx-white":"bs-white text-[#a4a4a4]"}  px-2 py-1 rounded-md `} onClick={() => setActiveChartTimeLine("W")}>
                                <p className='text-[9px] font-Outfit font-semibold'>1W</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${fullChartView ? "hidden" : ""} h-fit pb-[60px] overflow-y-scroll scroll-d-none !select-none`}>
                        <div className="flex justify-between px-3 py-3 ">
                            <div className="text-start">
                                <p>Nifty</p>
                                <p>23 may 2024 22200 ce </p>
                            </div>
                            <div className="text-end">
                                <div className="flex gap-2 justify-end items-center">
                                    <p className='text-[17px] font-semibold tx-green'>128.70</p>
                                    <i class="fa-solid fa-caret-up tx-green text-[20px] mt-0.5"></i>
                                </div>
                                <p className='text-[13px] font-Outfit font-medium opacity-80 '>+28.80 (+28.7%)</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex w-100 justify-around my-2">
                                <div className="text-center">
                                    <p className="text-[15px] font-semibold">Open</p>
                                    <p className="text-[15px] font-bold">143.40</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[15px] font-semibold">High</p>
                                    <p className="text-[15px] font-bold">159.10</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[15px] font-semibold">Low</p>
                                    <p className="text-[15px] font-bold">117.70</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[15px] font-semibold">Pre. Close</p>
                                    <p className="text-[15px] font-bold">139.35</p>
                                </div>
                            </div>
                            <div className="my-3">
                                <div className="w-fit mx-auto border-1 rounded-lg shadow-sm flex gap-2 items-center justify-center">
                                    <div className="flex px-3 py-2 items-center gap-2 text-[#0031dd] pointer active:opacity-50">
                                        <i class="fa-sharp fa-solid fa-link"></i>
                                        <p className='text-[13px] font-semibold '>Option chain</p>
                                    </div>
                                    <div className="w-[clamp(1px,1px,1px)] py-2 rounded-full bg-[#cecbcb]"></div>
                                    <div onClick={() => setFullChartView(true)} className="flex px-3 py-2 items-center gap-2 text-[#0031dd] pointer active:opacity-50">
                                        <i class="fa-solid fa-chart-simple"></i>
                                        <p className='text-[13px] font-semibold '>Charts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[93%] mx-auto flex gap-1 items-center justify-center my-3">
                            <Link to="/share-buy-sell">
                                <div className="w-fit bg-[#eb0000] py-[9px] rounded-l-3xl !rounded-r-[6px] overflow-hidden pointer active:opacity-50">
                                    <p className='text-[14px] px-[20px] font-semibold tx-white font-Outfit'>1.08471</p>
                                </div>
                            </Link>
                            <div className="col mx-auto min-h-[45px]">
                                <div className="col min-h-[45px] flex items-center rounded-md justify-between px-2 gap-3 bg-[#f3f6ff]">
                                    <div className=" px-2 py-1.5 pointer active:opacity-50 active:bg-[#cecece] rounded-md" onClick={roomdecNum}>
                                        <i className="fa-solid fa-minus text-[11px]"></i>
                                    </div>
                                    <div className="col flex flex-col items-center justify-center">
                                        <p className='text-[10px] font-semibold text-[#848b9d]'>Lot / 1 = 25</p>
                                        <input type="number"
                                            className="font-bold bg-[#f3f6ff] py-1 text-center min-w-[25px] !max-w-[70px] h-[clamp(18px,18px,18px)] flex items-center justify-center focus:outline-none"
                                            value={roomnum}
                                            onChange={roomhandleChange}
                                        />
                                    </div>
                                    <div className="px-2 py-1.5 pointer active:opacity-50 active:bg-[#cecece] rounded-md" onClick={roomincNum}>
                                        <i className="fa-solid fa-plus text-[11px]"></i>
                                    </div>
                                </div>
                            </div>
                            <Link to="/share-buy-sell">
                                <div className="w-fit bg-[#00b432] py-[9px] rounded-r-3xl rounded-l-[6px] overflow-hidden pointer active:opacity-50">
                                    <p className='text-[14px] px-[20px] font-semibold tx-white font-Outfit'>1.08522</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={`${fullChartView ? "hidden" : ""}`}>
                    <BottomBar />
                </div>
            </div>
        </>
    )
}
