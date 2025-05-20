import Background from "./utils/background";
import Navbar from "./components/navbar";
import About from "./components/about";
import Stocks from "./components/stocks";
import Crypto from "./components/crypto";
import Footer from "./components/footer";

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
          <Stocks/>
        </div>

        <div id="crypto" className="text-center">
          <Crypto/>
        </div>
      </div>

      </div>

      <div id="footer" className="text-center mt-20">
            <Footer/>
      </div>
        
    </main>
  );
}
