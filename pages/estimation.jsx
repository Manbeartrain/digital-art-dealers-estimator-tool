import Link from "next/link";
import React from "react";
import {FaArrowLeft} from "react-icons/fa";
import Estimate from "../components/Estimate";

function Estimation() {
    return (
        <div className="h-auto py-16 lg:h-screen w-screen bg-[#10172a] flex justify-center items-center flex-col">
            <Link
                href="/complexity"
                className="flex justify-center items-center cursor-pointer absolute top-5 left-5 rounded-full border-4 border-white p-2 hover:border-blue-600 hover:bg-blue-600 transition-all ease-in-out">
                <FaArrowLeft className="text-white text-xl" />
            </Link>
            <p className="text-lg lg:text-2xl text-gray-500 font-light tracking-widest uppercase">
                step 5
            </p>
            <p className="text-5xl lg:text-7xl text-white font-bold text-center px-8 mt-2">
                Project Estimate
            </p>
            <p className="text-lg lg:text-xl lg:w-1/2 mt-4 text-white font-light tracking-wide text-center px-8">
                Based on your answers, we provided a bottom range and a top
                ranges estimates below. This is only a rough estimate and the
                final cost can be discussed by contacting our support team.
            </p>
            <Estimate />
        </div>
    );
}

export default Estimation;
