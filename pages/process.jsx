import Link from "next/link";
import React from "react";
import {FaArrowLeft} from "react-icons/fa";
import ProgressSelection from "../components/ProgressSelection";

function Process() {
    return (
        <div className="h-screen w-screen bg-[#10172a] flex justify-center items-center flex-col">
            <Link
                href="/getStarted"
                className="flex justify-center items-center cursor-pointer absolute top-5 left-5 rounded-full border-4 border-white p-2 hover:border-blue-600 hover:bg-blue-600 transition-all ease-in-out">
                <FaArrowLeft className="text-white text-xl" />
            </Link>
            <p className="text-lg lg:text-2xl text-gray-500 font-light tracking-widest uppercase">
                step 2
            </p>
            <p className="text-5xl lg:text-7xl text-white font-bold text-center px-8 mt-2">
                Application progress
            </p>
            <p className="text-lg lg:text-xl lg:w-1/2 mt-4 text-white font-light tracking-wide text-center px-8">
                whether you have an idea or a fully developed application, we
                will help you get it to the market.
            </p>
            <ProgressSelection />
        </div>
    );
}

export default Process;
