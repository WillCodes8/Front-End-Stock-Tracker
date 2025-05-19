import React from "react";
import { ChartBar, ChartPie, CircleStack } from "../utils/icons";
import Button from "../utils/darkModeButton";

const Navbar = () => {
    return(
        <div className="fixed flex justify-between items-center gap-4 w-full h-14 bg-yellow-700">

        <div className="flex items-center gap-4">
            <h1 className="text-white text-lg font-bold ml-12">Stocks & Crypto Tracker</h1>
            <Button href="/">Dashboard</Button>
            <Button href="/stocks">Stocks</Button>
            <Button href="/crypto">Crypto</Button>
        </div>

        <div className="flex items-center gap-4 mr-3">
            <ChartBar/>
            <ChartPie/>
            <CircleStack/>
        </div>
    
        </div>
    )
}

export default Navbar