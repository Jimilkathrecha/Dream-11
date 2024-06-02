import React from 'react'
import Header from '../../components/header/Header'
import lefttextimg from '../../../public/IMG/shapes/Frame-l.png';
import righttextimg from '../../../public/IMG/shapes/Frame-r.png';
import BottomBar from '../../components/menu/BottomBar';
import SubIndex from '../../components/header/SubIndex';

export default function WinningList({ activeSmBtn, setActiveSmBtn }) {

    const dataWiningList = [
        { id: "1", number: "1", leftWing: lefttextimg, rightWing: righttextimg, name: "₹3 Crores" },
        { id: "2", number: "2", leftWing: lefttextimg, rightWing: righttextimg, name: "₹15 Lakhs" },
        { id: "3", number: "3", leftWing: lefttextimg, rightWing: righttextimg, name: "₹10 Lakhs" },
        { id: "4", number: "4", name: "₹07 Lakhs" },
        { id: "5", number: "5", name: "₹05 Lakhs" },
        { id: "6", number: "6", name: "₹04 Lakhs" },
        { id: "7", number: "7", name: "₹03 Lakhs" },
        { id: "8", number: "8", name: "₹02 Lakhs" },
        { id: "9", number: "9", name: "₹1.5 Lakhs" },
        { id: "10", number: "10", name: "₹ 01 Lakhs" },
        { id: "11", number: "11", name: "₹ 50,000" },
        { id: "12", number: "12", name: "₹ 40,009" },
        { id: "13", number: "13", name: "₹ 30,009" },
        { id: "14", number: "14", name: "₹ 20,009" },
        { id: "15", number: "15", name: "₹ 10,009" },
        { id: "16", number: "16", name: "₹ 1,009" },
        { id: "11", number: "11", name: "₹ 50,000" },
        { id: "12", number: "12", name: "₹ 40,009" },
        { id: "13", number: "13", name: "₹ 30,009" },
        { id: "14", number: "14", name: "₹ 20,009" },
        { id: "15", number: "15", name: "₹ 10,009" },
        { id: "16", number: "16", name: "₹ 1,009" },
    ]
    const dataLeaderboardList = [
        { id: "1", winnername: "John Carter", leftWing: lefttextimg, rightWing: righttextimg, points: "734.35", winingamount: "₹3 Crores" },
        { id: "2", winnername: "John Carter", leftWing: lefttextimg, rightWing: righttextimg, points: "734.35", winingamount: "₹15 Lakhs" },
        { id: "3", winnername: "John Carter", leftWing: lefttextimg, rightWing: righttextimg, points: "734.35", winingamount: "₹10 Lakhs" },
        { id: "4", winnername: "John Carter", points: "734.35", winingamount: "₹07 Lakhs" },
        { id: "5", winnername: "John Carter", points: "734.35", winingamount: "₹05 Lakhs" },
        { id: "6", winnername: "John Carter", points: "734.35", winingamount: "₹04 Lakhs" },
        { id: "7", winnername: "John Carter", points: "734.35", winingamount: "₹03 Lakhs" },
        { id: "8", winnername: "John Carter", points: "734.35", winingamount: "₹02 Lakhs" },
        { id: "9", winnername: "John Carter", points: "734.35", winingamount: "₹1.5 Lakhs" },
        { id: "10", winnername: "John Carter", points: "734.35", winingamount: "₹ 01 Lakhs" },
        { id: "11", winnername: "John Carter", points: "734.35", winingamount: "₹ 50,000" },
        { id: "12", winnername: "John Carter", points: "734.35", winingamount: "₹ 40,009" },
        { id: "13", winnername: "John Carter", points: "734.35", winingamount: "₹ 30,009" },
        { id: "14", winnername: "John Carter", points: "734.35", winingamount: "₹ 20,009" },
        { id: "15", winnername: "John Carter", points: "734.35", winingamount: "₹ 10,009" },
        { id: "16", winnername: "John Carter", points: "734.35", winingamount: "₹ 1,009" },
        { id: "11", winnername: "John Carter", points: "734.35", winingamount: "₹ 50,000" },
        { id: "12", winnername: "John Carter", points: "734.35", winingamount: "₹ 40,009" },
        { id: "13", winnername: "John Carter", points: "734.35", winingamount: "₹ 30,009" },
        { id: "14", winnername: "John Carter", points: "734.35", winingamount: "₹ 20,009" },
        { id: "15", winnername: "John Carter", points: "734.35", winingamount: "₹ 10,009" },
        { id: "16", winnername: "John Carter", points: "734.35", winingamount: "₹ 1,009" },
    ]

    return (
        <>
            <div className="min-w-[320px] max-w-[450px] overflow-hidden mx-auto h-[100dvh] relative">

                <Header />

                <div className="w-100 text-center py-1">
                    <p className='text-[20px] font-semibold font-Outfit'>Nifty expiry special</p>
                </div>

                <SubIndex activeSmBtn={activeSmBtn} setActiveSmBtn={setActiveSmBtn} />

                <div className="w-100 flex justify-between px-3 py-2 shadow-md shadow-red-100">
                    <div className="text-start col">
                        <p className='text-[14px] font-semibold font-Poppins opacity-90'>Prize Pool</p>
                        <p className='text-[17px] font-bold font-Outfit opacity-75'>₹ 54 Crores</p>
                    </div>
                    <div className="text-center col">
                        <p className='text-[14px] font-semibold font-Poppins opacity-90'>Spots</p>
                        <p className='text-[17px] font-bold font-Outfit opacity-75'>1,28,90,904</p>
                    </div>
                    <div className="text-end col">
                        <p className='text-[14px] font-semibold font-Poppins opacity-90'>Entry</p>
                        <p className='text-[17px] font-bold font-Outfit opacity-75'>₹ 59</p>
                    </div>
                </div>
                <div className="w-100">

                    <div className="w-100 border-t-1 border-gray-400">
                        {activeSmBtn === "Wining-List" &&
                            <>
                                <div className="w-100 flex justify-between px-3  py-2">
                                    <div className="col text-start">
                                        <p className='rank-text text-[12px] opacity-70 font-semibold font-Outfit'> Rank</p>
                                    </div> 
                                    <div className="col text-end">
                                        <p className='rank-text text-[12px] opacity-70 font-semibold font-Outfit'> Winning</p>
                                    </div>
                                </div>
                                <div className="h-[calc(100vh-245px)] overflow-y-scroll pb-[200px] scroll-d-none">
                                    {dataWiningList.map((item) => (
                                        <div key={item.id} className="w-100 flex justify-between px-3 border-b-1 border-x-1 py-1.5 border-gray-400">
                                            <div className="w-fit flex min-w-[23px] max-w-[23px] justify-center">
                                                <div className="">
                                                    <img src={item.leftWing} alt="" />
                                                </div>
                                                <p className='text-[14px] font-semibold font-Outfit'>{item.number}</p>
                                                <div className="">
                                                    <img src={item.rightWing} alt="" />
                                                </div>
                                            </div>
                                            <div className="w-fit">
                                                <p className='text-[14px] font-semibold font-Poppins'>{item.name}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        }
                        {activeSmBtn === "Leaderboard" &&
                            <>
                                <div className="w-100 flex justify-between px-3  py-2">
                                    <div className="col text-start">
                                        <p className='rank-text text-[12px] opacity-70 font-semibold font-Outfit'> Rank</p>
                                    </div>
                                    <div className="col text-center">
                                        <p className='rank-text text-[12px] opacity-70 font-semibold font-Outfit'> Profit Points</p>
                                    </div>
                                    <div className="col text-end">
                                        <p className='rank-text text-[12px] opacity-70 font-semibold font-Outfit'> Winning</p>
                                    </div>
                                </div>
                                <div className="h-[calc(100vh-245px)] overflow-y-scroll pb-[200px] scroll-d-none">
                                    {dataLeaderboardList.map((item) => (
                                        <div key={item.id} className="w-100 flex justify-between px-3 border-b-1 border-x-1 py-1.5 border-gray-400">
                                            <div className="col text-start">
                                                <p className='text-[14px] font-semibold font-Outfit'>{item.winnername}</p>
                                            </div>
                                            <div className="col text-center">
                                                <p className='text-[14px] font-semibold font-Poppins'>{item.points}</p>
                                            </div>
                                            <div className="col text-end">
                                                <p className='text-[14px] font-semibold font-Poppins'>{item.winingamount}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>


            <BottomBar />
        </>
    )
}
