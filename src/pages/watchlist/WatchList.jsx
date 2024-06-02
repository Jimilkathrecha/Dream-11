import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import BottomBar from '../../components/menu/BottomBar'
import TradingChartModal from "../../components/barChart/TradingChartModal"

export default function WatchList() {

    const [activeTab, setactiveTab] = useState("My-Fav")

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedChartDataModal, setSelectedChartDataModal] = useState(false);

    const handleSelectedChartDataModal = () => {
        setSelectedChartDataModal(true)
    }
    const closeSelectedChartDataModal = () => {
        setSelectedChartDataModal(false)
    }

    return (
        <>
            <div className="min-w-[320px] max-w-[450px] mx-auto overflow-hidden h-[100dvh] relative">
                <div className="">
                    <Header />
                    <div className="w-100 flex pt-0.5">
                        <div className="col">
                            <Link to="/home/nifty-list">
                                <div className={`px-2 border-y-2 border-e-1 border-red col text-start py-1`}>
                                    <p className={` text-[13px] font-Outfit font-semibold `}>Nifty</p>
                                    <div className="flex gap-2 w-fit">
                                        <p className='text-[17px] font-semibold tx-green'>22,437.78</p>
                                        <i class="fa-solid fa-caret-up tx-green text-[20px] mt-0.5"></i>
                                    </div>
                                    <p className='text-[13px] font-Outfit font-bold'>+35.90 (+0.16%)</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/bnifty-list">
                                <div className={`px-2 border-y-2 border-x-1 border-red col text-start py-1`}>
                                    <p className={` text-[13px] font-Outfit font-semibold `}>BNifty</p>
                                    <div className="flex gap-2 w-fit">
                                        <p className='text-[17px] font-semibold tx-green'>48,187.78</p>
                                        <i class="fa-solid fa-caret-up tx-green text-[20px] mt-0.5"></i>
                                    </div>
                                    <p className='text-[13px] font-Outfit font-bold'>+35.90 (+0.16%)</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/sensex-list">
                                <div className={`px-2 border-y-2 border-s-1 border-red col text-start py-1`}>
                                    <p className={` text-[13px] font-Outfit font-semibold `}>Sensex</p>
                                    <div className="flex gap-2 w-fit">
                                        <p className='text-[17px] font-bold tx-green'>72,980.78</p>
                                        <i class="fa-solid fa-caret-up tx-green text-[20px] mt-0.5"></i>
                                    </div>
                                    <p className='text-[13px] font-Outfit font-bold'>+35.90 (+0.16%)</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="w-100 flex overflow-x-scroll scroll-d-none">
                        <div className="flex w-fit gap-4 px-3 py-3 pe-5">
                            <div onClick={() => setactiveTab("My-watchlist")} className={`${activeTab === "My-watchlist" ? " border-b-2 border-red tx-red" : ""} py-1`}>
                                <p className={`${activeTab === "My-watchlist" ? " font-semibold" : " font-medium"}  whitespace-nowrap pointer text-[17px] font-Outfit`}> My watchlist</p>
                            </div>
                            <div onClick={() => setactiveTab("My-Fav")} className={`${activeTab === "My-Fav" ? " border-b-2 border-red tx-red" : ""} py-1`}>
                                <p className={`${activeTab === "My-Fav" ? " font-semibold" : " font-medium"}  whitespace-nowrap pointer text-[17px] font-Outfit`}> My Fav</p>
                            </div>
                            <div onClick={() => setactiveTab("Nifty-Bn")} className={`${activeTab === "Nifty-Bn" ? " border-b-2 border-red tx-red" : ""} py-1`}>
                                <p className={`${activeTab === "Nifty-Bn" ? " font-semibold" : " font-medium"}  whitespace-nowrap pointer text-[17px] font-Outfit`}> Nifty-Bn</p>
                            </div>
                            <div onClick={() => setactiveTab("Nifty-50")} className={`${activeTab === "Nifty-50" ? " border-b-2 border-red tx-red" : ""} py-1`}>
                                <p className={`${activeTab === "Nifty-50" ? " font-semibold" : " font-medium"}  whitespace-nowrap pointer text-[17px] font-Outfit`}> Nifty-50</p>
                            </div>
                            <div onClick={() => setactiveTab("BNifty-Bn")} className={`${activeTab === "BNifty-Bn" ? " border-b-2 border-red tx-red" : ""} py-1`}>
                                <p className={`${activeTab === "BNifty-Bn" ? " font-semibold" : " font-medium"}  whitespace-nowrap pointer text-[17px] font-Outfit`}> BNifty-Bn</p>
                            </div>
                            <div onClick={() => setactiveTab("BNifty-50")} className={`${activeTab === "BNifty-50" ? " border-b-2 border-red tx-red" : ""} py-1`}>
                                <p className={`${activeTab === "BNifty-50" ? " font-semibold" : " font-medium"}  whitespace-nowrap pointer text-[17px] font-Outfit`}> BNifty-50</p>
                            </div>
                        </div>
                    </div>


                    <div className="w-100 flex flex-col">
                        <Link to="/trading-details-chart">
                            <div className="flex justify-between px-4 border-b-2 py-2">
                                <div className="">
                                    <p className='text-[18px] font-semibold font-Outfit opacity-70'>Nifty</p>
                                    <p className='text-[13px] font-Outfit font-medium opacity-80 '>23 may 2024 22400 ce</p>
                                </div>
                                <div className="text-end">
                                    <div className="flex gap-2 justify-end items-center">
                                        <p className='text-[17px] font-semibold tx-green'>128.70</p>
                                        <i class="fa-solid fa-caret-up tx-green text-[20px] mt-0.5"></i>
                                    </div>
                                    <p className='text-[13px] font-Outfit font-medium opacity-80 '>+28.80 (+28.7%)</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/trading-details-chart">
                            <div className="flex justify-between px-4 border-b-2 py-2">
                                <div className="">
                                    <p className='text-[18px] font-semibold font-Outfit opacity-70'>Nifty</p>
                                    <p className='text-[13px] font-Outfit font-medium opacity-80 '>23 may 2024 22400 pe</p>
                                </div>
                                <div className="text-end">
                                    <div className="flex gap-2 justify-end items-center">
                                        <p className='text-[17px] font-bold tx-red'>68.53</p>
                                        <i class="fa-solid fa-caret-down tx-red text-[20px] mt-0.5"></i>
                                    </div>
                                    <p className='text-[13px] font-Outfit font-medium opacity-80 '>+32.47 (+32.7%)</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/trading-details-chart">
                            <div className="flex justify-between px-4 border-b-2 py-2">
                                <div className="">
                                    <p className='text-[18px] font-semibold font-Outfit opacity-70'>Nifty</p>
                                    <p className='text-[13px] font-Outfit font-medium opacity-80 '>23 may 2024 22400 ce</p>
                                </div>
                                <div className="text-end">
                                    <div className="flex gap-2 justify-end items-center">
                                        <p className='text-[17px] font-semibold tx-green'>258.70</p>
                                        <i class="fa-solid fa-caret-up tx-green text-[20px] mt-0.5"></i>
                                    </div>
                                    <p className='text-[13px] font-Outfit font-medium opacity-80 '>+57.80 (+39.7%)</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/trading-details-chart">
                            <div className="flex justify-between px-4 border-b-2 py-2">
                                <div className="">
                                    <p className='text-[18px] font-semibold font-Outfit opacity-70'>Nifty</p>
                                    <p className='text-[13px] font-Outfit font-medium opacity-80 '>23 may 2024 22400 pe</p>
                                </div>
                                <div className="text-end">
                                    <div className="flex gap-2 justify-end items-center">
                                        <p className='text-[17px] font-semibold tx-green'>187.70</p>
                                        <i class="fa-solid fa-caret-up tx-green text-[20px] mt-0.5"></i>
                                    </div>
                                    <p className='text-[13px] font-Outfit font-medium opacity-80 '>+45.80 (+9.7%)</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <BottomBar />
                </div>
            </div>





            <Modal className="!p-0 !my-0" isOpen={selectedChartDataModal} backdrop={"blur"} placement={"bottom"} onOpenChange={closeSelectedChartDataModal}>
                <ModalContent className="min-w-[350px] max-w-[450px] mx-auto !p-0 !rounded-b-none">
                    {(closeSelectedChartDataModal) => (
                        <>
                            <ModalBody className="!p-0 !m-0">
                                <div className="w-100 overflow-hidden">
                                    <TradingChartModal />
                                </div>
                                <div className="flex justify-between px-3 py-1 bg-[#f5f5f5]">
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
                                    <div className="flex w-100 justify-around">
                                        <div className="text-center">
                                            <p className="text-[15px] font-semibold">Open</p>
                                            <p className="text-[15px] font-bold">143.40</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[15px] font-semibold">High</p>
                                            <p className="text-[15px] font-bold">159.10</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[15px] font-semibold">Open</p>
                                            <p className="text-[15px] font-bold">117.70</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[15px] font-semibold">Open</p>
                                            <p className="text-[15px] font-bold">139.35</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="">
                                            <div className="">
                                                <i class="fa-sharp fa-solid fa-link"></i>
                                                <p>Option chain</p>
                                            </div>
                                            <div className="">

                                                <p>Charts</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>





        </>
    )
}
