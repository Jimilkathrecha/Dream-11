import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Index({ }) {
    const location = useLocation();
    const currentLocation = location.pathname;
    return (
        <>
            <div className="w-100 flex pt-1">
                <div className={`${currentLocation === "/home/nifty-list" || "/nifty-list" ? "bs-red" : "bs-white"}  border-y-2 border-e-1 border-red col text-center py-2`}>
                    <Link to="/home/nifty-list">
                        <p className={`${currentLocation === "/home/nifty-list" || "/nifty-list" ? "tx-white" : "tx-red"} text-[16px] font-Outfit font-semibold `}>Nifty</p>
                    </Link>
                </div>
                <div className={`${currentLocation === "/bnifty-list" ? "bs-red tx-white" : "bs-white tx-red"}  border-y-2 border-x-1 border-red col text-center py-2`}>
                    <Link to="/bnifty-list">
                        <p className={`${currentLocation === "/bnifty-list" ? "tx-white" : "tx-red"} text-[16px] font-Outfit font-semibold `}>BNifty</p>
                    </Link>
                </div>
                <div className={`${currentLocation === "/sensex-list" ? "bs-red tx-white" : "bs-white tx-red"}  border-y-2 border-s-1 border-red col text-center py-2`}>
                    <Link to="/sensex-list">
                        <p className={`${currentLocation === "/sensex-list" ? "tx-white" : "tx-red"} text-[16px] font-Outfit font-semibold `}>Sensex</p>
                    </Link>
                </div>
            </div>
        </>
    )
}
