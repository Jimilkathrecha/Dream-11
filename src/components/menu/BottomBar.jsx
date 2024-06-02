import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function BottomBar() {

  const location = useLocation();
  const currentLocation = location.pathname; 

  return (
    <>
      {currentLocation === "/trading-details-chart" ?
        ""
        : <div className="w-100 bs-red fixed bottom-0 left-0 right-0 py-[0px] rounded-t-xl border-0 flex justify-around min-w-[320px] max-w-[450px] mx-auto">

          <div className={`flex relative duration-1000  ${currentLocation === "/home/nifty-list" || currentLocation === "/home" ? "bs-mix-red" : ""} z-50 `}>
            <div className={` ${currentLocation === "/home/nifty-list" || currentLocation === "/home" ? " bs-red" : ""}  rounded-tr-3xl min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] me-[-5px]`}></div>
            <Link to="/home/nifty-list">
              <div className={`${currentLocation === "/home/nifty-list" || currentLocation === "/home" ? "tx-red  bs-white mt-[-10px] shadow-lg scale-[1.3] slide-top-active min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px]" : "tx-white min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px]"}  duration-500 pointer rounded-full flex items-center justify-center`}>
                <i className={`fa-solid fa-trophy-star ${currentLocation === "/home/nifty-list" || currentLocation === "/home" ? "text-[20px]" : "text-[25px]"} `}></i>
              </div>
            </Link>
            <div className={` ${currentLocation === "/home/nifty-list" || currentLocation === "/home" ? " bs-red" : ""}  rounded-tl-3xl min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] ms-[-5px]`}></div>
          </div>

          <div className={`flex relative duration-1000  ${currentLocation === "/watchlist" || currentLocation === "/trading-details-chart" ? "bs-mix-red" : ""} z-50 `}>
            <div className={` ${currentLocation === "/watchlist" || currentLocation === "/trading-details-chart" ? " bs-red" : ""}  rounded-tr-3xl min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] me-[-5px]`}></div>
            <Link to="/watchlist">
              <div className={`${currentLocation === "/watchlist" || currentLocation === "/trading-details-chart" ? "tx-red  bs-white mt-[-10px] scale-[1.3] slide-top-active min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px]" : "tx-white min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px]"}  duration-500 pointer rounded-full flex items-center justify-center`}>
                <i className={`fa-solid fa-chart-mixed ${currentLocation === "/watchlist" || currentLocation === "/trading-details-chart" ? "text-[20px]" : "text-[25px]"} `}></i>
              </div>
            </Link>
            <div className={` ${currentLocation === "/watchlist" || currentLocation === "/trading-details-chart" ? " bs-red" : ""}  rounded-tl-3xl min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] ms-[-5px]`}></div>
          </div>

          <div className={`flex relative duration-1000  ${currentLocation === "list" ? "bs-mix-red" : ""} z-50 `}>
            <div className={` ${currentLocation === "list" ? " bs-red" : ""}  rounded-tr-3xl min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] me-[-5px]`}></div>
            <div className={`${currentLocation === "list" ? "tx-red  bs-white mt-[-10px] scale-[1.3] slide-top-active min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px]" : "tx-white min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px]"}  duration-500 pointer rounded-full flex items-center justify-center`}>
              <i className={`fa-solid fa-list ${currentLocation === "list" ? "text-[20px]" : "text-[25px]"} `}></i>
            </div>
            <div className={` ${currentLocation === "list" ? " bs-red" : ""}  rounded-tl-3xl min-w-[30px] max-w-[30px] min-h-[30px] max-h-[30px] ms-[-5px]`}></div>
          </div>

        </div>
      }
    </>
  )
}
