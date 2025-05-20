import Navbar from "../components/navbar";
import MarketTrends from "./components/marketTrends";
import Search from "./components/search";
import DataContainer from "./components/dataContainer";
import Footer from "../components/footer";

export default function Crypto() {
  return (
    <main className="min-h-screen dark:bg-black flex flex-col">

      <div id="nav">
        <Navbar/>
      </div>

      <div id="mainContent" className="flex flex-col items-center flex-grow pt-22 px-6 gap-6 h-full">

        <div id="marketTrends" className="w-8/9 bg-red-700 h-[80px] text-center">
          <MarketTrends/>
        </div>

        <div id="search" className="w-4/9 bg-blue-700 h-[50px] text-center">
          <Search/>
        </div>

        <div id="dataContainer" className="w-full bg-orange-700 h-[400px] text-center">
          <DataContainer/>
        </div>

      </div>

      <div id="footer">
        <Footer/>
      </div>

    </main>
  );
}