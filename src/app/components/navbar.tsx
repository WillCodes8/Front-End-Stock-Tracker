import React from "react";
import Button from "../utils/darkModeButton";

const Navbar = () => {
    return(
        <div className="fixed flex justify-between items-center gap-4 w-full h-14">

        <div className="flex items-center gap-4">
            <h1 className="text-white text-lg font-bold ml-3">Stocks & Crypto Tracker</h1>
            <Button href="/">Dashboard</Button>
            <Button href="/stocks">Stocks</Button>
        </div>

        <div className="flex items-center gap-4 mr-3">
           
        </div>
        
        </div>
    )
}

export default Navbar