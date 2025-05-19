import React from "react";
import Link from "next/link";
import Button from "../utils/button";

const Navbar = () => {
    return(
        <div className="fixed flex flex-nowrap gap-4 w-full h-14 bg-red-700">
            <h1 className="text-white font-bold ml-12">Stocks & Crypto Tracker</h1>
            <Button href="/">Dashboard</Button>
            <Button href="/stocks">Stocks</Button>
            <Button href="/crypto">Crypto</Button>
        </div>
    )
}

export default Navbar