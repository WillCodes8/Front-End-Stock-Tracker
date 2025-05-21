import Background from "./utils/background";
import Navbar from "./components/navbar";
import About from "./components/about";
import Stocks from "./components/stocks";
import Crypto from "./components/crypto";
import { Computer } from "./utils/icons";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      <Background/>

      <div id="nav">
        <Navbar/>
      </div>

      <div id="mainContent" className="flex flex-grow mt-40 pb-12 px-6 gap-6 h-full">
        <div id="leftSide" className="w-1/2 h-[400px] text-center">
            <About/>
        </div>

      <div id="rightSide" className="w-1/2 -mt-8 h-[400px] flex flex-col justify-center">
        <div id="stock" className="text-center">
          <a href="/stocks"><Stocks/></a>
        </div>

        <div id="crypto" className="text-center">
          <a href="/crypto"><Crypto/></a>
        </div>
      </div>

      </div>

      <div id="footer" className="flex justify-center text-white text-center font-bold pb-10">
          
          <div className="flex items-center gap-2">
            Github:<a href="https://github.com/WillCodes8"><Computer/></a>
          </div>
          
      </div>
        
    </main>
  );
}
