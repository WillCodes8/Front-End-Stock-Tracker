import Navbar from "./components/navbar";
import About from "./components/about";
import Stocks from "./components/stocks";
import Crypto from "./components/crypto";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col">

      <div id="nav">
        <Navbar/>
      </div>

      <div id="mainContent" className="flex flex-grow pt-26 pb-12 px-6 gap-6 h-full">
        <div id="leftSide" className="w-1/2 bg-red-700 text-center">
          <About/>
        </div>

      <div id="rightSide" className="w-1/2 flex flex-col gap-6">
        <div id="stock" className="h-1/2 bg-blue-700 text-center">
          <Stocks/>
        </div>

        <div id="crypto" className="h-1/2 bg-green-700 text-center">
          <Crypto/>
        </div>
      </div>

      </div>

      <div id="footer">
            <Footer/>
      </div>
        
    </main>
  );
}
