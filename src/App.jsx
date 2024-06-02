import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader';
import Home from './pages/Home';
import Refer from './pages/Refer';
import TakeRefer from './pages/TakeRefer';
import Phone from './pages/Phone';
import PhoneVerify from './pages/PhoneVerify';
import Language from './components/language/Language';
import AdminLogin from './pages/adminAuth/AdminLogin';
import Contest from './pages/contest/nifty/Contest';
import WinningList from './pages/contest/WinningList';
import ProfileModal from './components/menu/ProfileModal';
import WatchList from './pages/watchlist/WatchList';
import TradingDetailsChart from './pages/tradeView/TradingDetailsChart';
import ShareBuyAndSell from './pages/ShareBuyAndSell/ShareBuyAndSell';

function App() {

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  const [activeSmBtn, setActiveSmBtn] = useState("Wining-List");

  const location = useLocation();

  const currentLocation = location.pathname;

  useEffect(() => {
    if (currentLocation === "/home") { navigate("/home/nifty-list") }
  }, [])


  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Perform your asynchronous operation here

      // Simulate a delay (remove this line in a real application)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Once the data is loaded, set loading to false
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-100">

        {loading ?
          <Loader />
          :
          <Routes>
            <Route path="/" element={<Language />} />

            <Route path="/home" element={<Contest />} />
            <Route path="/home/nifty-list" element={<Contest />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/trading-details-chart" element={<TradingDetailsChart />} />
            <Route path="/share-buy-sell" element={<ShareBuyAndSell />} />
            <Route path="/winning-list" element={<WinningList activeSmBtn={activeSmBtn} setActiveSmBtn={setActiveSmBtn} />} />
            <Route path="/reference" element={<Refer />} />
            <Route path="/take-ref" element={<TakeRefer />} />
            <Route path="/phone" element={<Phone />} />
            <Route path="/phone-verify" element={<PhoneVerify />} />

            {/* <Route path="/home" element={<Home  />} /> */}
            {/* <Route path="/" element={<AdminLogin />} /> */}

          </Routes>
        }
      </div>


    </>
  )
}

export default App
