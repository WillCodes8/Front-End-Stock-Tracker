import Navbar from "../components/navbar";
import MarketTrends from "./components/marketTrends";
import Search from "./components/search";
import DataContainer from "./components/dataContainer";
import Footer from "../components/footer";
import Background from "../utils/background";

export default function Crypto() {
  const date = new Date().toLocaleDateString()

  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      <Background/>

      <div id="mainContent" className="flex flex-col items-center flex-grow pt-22 px-6 gap-6 h-full">

      <div id="nav" className="fixed top-0 w-full z-50">
        <Navbar/>
      </div>

        <div id="date">
          <h1 className="font-bold text-white mt-10">Crypto Data For: {date}</h1>
        </div>

        <div id="marketTrends" className="w-8/9 h-[80px] text-center">
          <MarketTrends/>
        </div>

        <div id="search" className="w-4/9 h-[50px] text-center">
          <Search/>
        </div>

        <div id="dataContainer" className="w-full h-[400px] text-center">
          <DataContainer/>
        </div>

      </div>

      <div id="footer" className="flex justify-center text-white text-center font-bold pb-10 mt-10">
        <Footer/>
      </div>

    </main>
  );
}