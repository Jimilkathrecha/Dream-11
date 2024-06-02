import React, { useState } from 'react'
import Header from '../../../components/header/Header'
import Index from '../../../components/header/Index'
import BottomBar from '../../../components/menu/BottomBar'
import { useNavigate } from 'react-router-dom'

export default function Contest() {

  const [ongoingCompetition, setOngoingCompetition] = useState(false)

  const navigate = useNavigate();

  const handleWinningList = () => {
    navigate("/winning-list")
  }

  const handleOngoingCompetitionToggle = () => {
    setOngoingCompetition(prevCheck => !prevCheck);
  }


  return (
    <>
      <div className="min-w-[320px] max-w-[450px] overflow-hidden mx-auto h-[100dvh] relative">

        <Header />

        <Index />

        <div className="w-100 h-100 overflow-y-scroll scroll-d-none">
          <div className="w-100 h-fit px-2 pb-[200px]">

            <div className="flex flex-col gap-1 contest-listing-handle">
              <div className="px-2 py-1">
                <p className='text-[20px] font-medium font-Outfit'>Ongoing competition</p>
              </div>
              <div className="flex flex-col gap-1.5 rounded-lg overflow-hidden">
                <div className="flex items-center contest-listing shadow-md justify-between px-3 py-2 bg-[#efeded]">
                  <div className="flex flex-col gap-2" onClick={handleWinningList}>
                    <div className="">
                      <p className='text-[15px] font-semibold'>Tata motors (NSE)</p>
                    </div>
                    <div className="flex flex-col gap-0">
                      <p className='text-[15px] font-semibold'> LTP 925.28</p>
                      <p className='text-[15px] font-semibold'> CMP 945.28</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end" onClick={handleWinningList}>
                    <p className='text-[15px] font-semibold'>Your rank</p>
                    <p className='text-[15px] font-semibold'>28</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2" onClick={handleOngoingCompetitionToggle}>
                      <p className='text-[15px] font-semibold'>Current trades</p>
                      {ongoingCompetition ? <i className="fa-solid fa-chevron-down" ></i> : <i className="fa-solid fa-chevron-up" ></i>}
                    </div>
                    <div className="flex flex-col gap-0 items-end" onClick={handleWinningList}>
                      <p className='text-[15px] font-semibold'>Current Profit/loss</p>
                      <p className='text-[15px] font-semibold'>+5,892.00</p>
                    </div>
                  </div>
                </div>
                <div className={`${ongoingCompetition ? "scale-up-ver-top " : "d-none"}  flex items-center contest-listing shadow-md justify-between px-3 py-2 bg-[#efeded]`}>
                  <div className="flex flex-col gap-2" onClick={handleWinningList}>
                    <div className="">
                      <p className='text-[15px] font-semibold'>Tata power (NSE)</p>
                    </div>
                    <div className="flex flex-col gap-0">
                      <p className='text-[15px] font-semibold'>LTP 125.48</p>
                      <p className='text-[15px] font-semibold'>CMP 132.98</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end" onClick={handleWinningList}>
                    <p className='text-[15px] font-semibold'>Your rank</p>
                    <p className='text-[15px] font-semibold'>28</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2" onClick={handleOngoingCompetitionToggle}>
                      <p className='text-[15px] font-semibold'>Current trades</p>
                    </div>
                    <div className="flex flex-col gap-0 items-end" onClick={handleWinningList}>
                      <p className='text-[15px] font-semibold'>Current Profit/loss</p>
                      <p className='text-[15px] font-semibold'>+4,234.46</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex flex-col gap-1 contest-listing-handle">
              <div className="px-2 py-1">
                <p className='text-[20px] font-medium font-Outfit'>Current Competitions</p>
              </div>
              <div className="flex flex-col gap-1.5 rounded-lg overflow-hidden">
                <div className="flex items-center contest-listing shadow-md justify-between px-3 py-2 bg-[#efeded]">
                  <div className="flex flex-col justify-end gap-2">
                    <div className="py-3">
                      <p className='text-[15px] font-semibold'>Nifty expiry special</p>
                    </div>
                    <div className="">
                      <p className='text-[15px] font-semibold'>Mega 50,000 points</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-center">
                    <div className="flex flex-col items-end">
                      <p className='text-[15px] font-semibold'>Entry points req.</p>
                      <p className='text-[15px] font-semibold'>200</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center contest-listing shadow-md justify-between px-3 py-2 bg-[#efeded]">
                  <div className="flex flex-col justify-end gap-2">
                    <div className="py-3">
                      <p className='text-[15px] font-semibold'>Nifty expiry special</p>
                    </div>
                    <div className="">
                      <p className='text-[15px] font-semibold'>Mega 50,000 points</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-center">
                    <div className="flex flex-col items-end">
                      <p className='text-[15px] font-semibold'>Entry points req.</p>
                      <p className='text-[15px] font-semibold'>200</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 contest-listing-handle">
              <div className="px-2 py-1">
                <p className='text-[20px] font-medium font-Outfit'>Upcoming Big Competitions</p>
              </div>
              <div className="flex flex-col gap-1.5 rounded-lg overflow-hidden">
                <div className="flex items-center contest-listing shadow-md justify-between px-3 py-2 bg-[#efeded]">
                  <div className="flex flex-col justify-end gap-2">
                    <div className="py-3">
                      <p className='text-[15px] font-semibold'>Nifty expiry special</p>
                    </div>
                    <div className="">
                      <p className='text-[15px] font-semibold'>Mega 50,000 points</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-center">
                    <div className="flex flex-col items-end">
                      <p className='text-[15px] font-semibold'>Entry points req.</p>
                      <p className='text-[15px] font-semibold'>200</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center contest-listing shadow-md justify-between px-3 py-2 bg-[#efeded]">
                  <div className="flex flex-col justify-end gap-2">
                    <div className="py-3">
                      <p className='text-[15px] font-semibold'>Nifty expiry special</p>
                    </div>
                    <div className="">
                      <p className='text-[15px] font-semibold'>Mega 50,000 points</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-center">
                    <div className="flex flex-col items-end">
                      <p className='text-[15px] font-semibold'>Entry points req.</p>
                      <p className='text-[15px] font-semibold'>200</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <BottomBar />











      </div>
    </>
  )
}
