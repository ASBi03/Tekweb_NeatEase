import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="container mx-auto w-screen flex justify-between items-center bg-yellow-400">
            <div className="ml-5">
                <Link to="/"><img src="NeatEase1.png" alt="NeatEase" w-4 /></Link>
            </div>
        </nav>
    );
};

export default Navbar;