import Background from "./utils/background";
import Navbar from "./components/navbar";
import About from "./components/about";
import Stocks from "./components/stocks";
/* import Crypto from "./components/crypto"; */
import { Computer } from "./utils/icons";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden">
      <Background/>

      <div id="nav">
        <Navbar/>
      </div>

      <div id="mainContent" className="flex flex-grow mt-40 pb-12 px-6 gap-6 h-[400px]">
        <div id="leftSide" className="w-1/2 h-full text-center flex items-center justify-center">
          <About />
        </div>

        <div id="rightSide" className="w-1/2 h-full flex items-center justify-center mt-3">
          <div className="w-full h-full flex items-center justify-center">
            <a href="/stocks" className="w-full h-full block">
              <Stocks />
            </a>
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
