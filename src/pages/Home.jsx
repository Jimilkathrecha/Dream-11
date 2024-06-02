import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BottomBar from '../components/menu/BottomBar';
import Header from '../components/header/Header';
import Index from '../components/header/Index';

export default function Home({}) {

    const [handleSplash, sethandleSplash] = useState(false);
    const [activeBtn, setActiveBtn] = useState("Nifty");
    const [anime, setanime] = useState("");
    const navigate = useNavigate();

    const handlerefercodepage = () => {
        sethandleSplash(true)
        setTimeout(() => {
            setanime("slide-in-fwd-top")
        }, 1000);
        setTimeout(() => {
            navigate("/reference")
        }, 2000);
    }


    return (
        <>
            <div className="min-w-[320px] max-w-[450px] overflow-hidden mx-auto h-[100dvh] relative">

                <Header />

                <Index />

                <BottomBar />

            </div>
        </>
    )
}
