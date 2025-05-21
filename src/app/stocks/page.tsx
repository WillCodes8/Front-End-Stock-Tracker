import Navbar from "../components/navbar";
import Background from "../utils/background";
import MarketTrends from "./components/marketTrends";
import Search from "./components/search";
import DataContainer from "./components/dataContainer";
import Footer from "../components/footer";

export default function Stocks() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      <Background/>

      <div id="nav">
        <Navbar/>
      </div>

      <div id="mainContent" className="flex flex-col items-center flex-grow pt-22 px-6 gap-6 h-full">

        <div id="marketTrends" className="w-8/9 h-[80px] text-center mt-15 mb-30">
          <MarketTrends/>
        </div>

        <div id="search" className="w-4/9 h-[50px] text-center">
          <Search/>
        </div>

        <div id="dataContainer" className="w-full h-[400px] text-center">
          <DataContainer/>
        </div>

      </div>

      <div id="footer" className="text-center">
        <Footer/>
      </div>

    </main>
  );
}