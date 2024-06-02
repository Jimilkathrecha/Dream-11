import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import React from 'react';

export default function ProfileModal({ profileModal, closeProfileModal }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <div className={`${profileModal ? "" : "hidden"}  min-w-[320px] max-w-[450px] profile-modal-holder overflow-hidden mx-auto h-[100dvh] relative`}>

            <div className={`${profileModal ? "scale-up-hor-left" : "hidden"}  fixed min-w-[320px] max-w-[450px] mx-auto z-[99999] top-0 left-0 right-0 h-[100vh] bg-transparent`}>
                <div className={`${profileModal ? "scale-up-hor-right" : "hidden"}  w-100 mx-auto top-0  right-0 h-[100vh] fixed z-10 bg-black opacity-[0.6]`} onClick={closeProfileModal}></div>
                <div className="w-[85%] h-[100vh] bs-white flex flex-col justify-between pb-3 relative z-[99999]">
                    <div className="h-fit">

                        <div className="bg-[#252323] w-100 flex px-3 pt-4 pb-5 relative">
                            <div className="flex items-center gap-2">
                                <div className=" w-[clamp(40px,40px,40px)] h-[clamp(40px,40px,40px)] rounded-full bs-white flex p-2.5 items-center justify-center">
                                    <img className="h-100 object-contain" src="../../IMG/shapes/user2.png" alt="" />
                                </div>
                                <div className="">
                                    <p className="text-[13px] tx-white font-semibold font-Outfit">Trading Superstar</p>
                                    <p className="text-[13px] tx-white font-semibold font-Outfit">Amigo</p>
                                </div>
                            </div>
                            <div className="absolute top-100 start-50 translate-middle w-100">

                                <div className="w-[80%] mx-auto bs-white px-3 py-1.5 flex shadow-2 rounded-md justify-between">
                                    <div className="flex gap-2 items-center">
                                        <div className=" w-[clamp(20px,20px,20px)] h-[clamp(20px,20px,20px)]">
                                            <img className="h-100 object-contain" src="../../IMG/shapes/valet.png" alt="" />
                                        </div>
                                        <p className="tx- font-semibold text-[13px] font-Outfit">My Points</p>
                                    </div>
                                    <div className="">
                                        <p className="tx- font-semibold text-[13px] font-Outfit opacity-85">5674.90</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="w-100 my-3">
                            <div className="bg-[#579d8e] w-[60%] rounded-md mx-auto text-center py-0.5">
                                <p className="text-[13px] tx-white font-semibold font-Outfit">Add points</p>
                            </div>
                        </div>

                        <div className="w-100 px-4">
                            <div className="flex flex-col  shadow-1 rounded-lg">
                                <div className="px-3 py-3 rounded-t-lg">
                                    <p className="text-[15px] font-semibold font-Outfit opacity-95 ">Refer & Earn</p>
                                </div>
                                <div className="px-3 py-3 rounded-b-lg border-t-[2px] ">
                                    <p className="text-[15px] font-semibold font-Outfit opacity-95 ">My Info & Settings</p>
                                </div>
                            </div>


                            <div className="flex flex-col mt-4  shadow-1 rounded-lg">
                                <div className="px-3 py-3 rounded-t-lg">
                                    <p className="text-[15px] font-semibold font-Outfit opacity-95 ">Help & Support</p>
                                </div>
                                <div className="px-3 py-3 border-y-[2px] ">
                                    <p className="text-[15px] font-semibold font-Outfit opacity-95 ">How to Learn</p>
                                </div>
                                <div className="px-3 py-3 rounded-b-lg">
                                    <p className="text-[15px] font-semibold font-Outfit opacity-95 ">More</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-[90%] mx-auto">
                        <div className="w-100 py-2 w- [clamp(50px,50px,50px)] h- [clamp(50px,50px,50px)] bs-red gap-3 flex items-center justify-center rounded-md">
                            <p className="text-[16px] font-bold tx-white font-Outfit">Logout</p>
                            <i className="fa-solid fa-right-from-bracket tx-white text-[20px]"></i>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
