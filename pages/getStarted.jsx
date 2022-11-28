import Link from "next/link";
import React from "react";
import {FaArrowLeft} from "react-icons/fa";
import PlatformSelection from "../components/PlatformSelection";

function getStarted() {
    return (
        <div className="h-screen w-screen bg-[#10172a] flex justify-center items-center flex-col">
            <Link
                href="/"
                className="flex justify-center items-center cursor-pointer absolute top-5 left-5 rounded-full border-4 border-white p-2 hover:border-blue-600 hover:bg-blue-600 transition-all ease-in-out">
                <FaArrowLeft className="text-white text-xl" />
            </Link>
            <p className="text-lg lg:text-2xl text-gray-500 font-light tracking-widest uppercase">
                step 1
            </p>
            <p className="text-5xl lg:text-7xl text-white font-bold text-center px-8 mt-2">
                Choose your platform
            </p>
            <p className="text-lg lg:text-xl lg:w-1/2 mt-4 text-white font-light tracking-wide text-center px-8">
                It all starts here. Choosing a platform for your application
                comes with great importance. We will always recommend to go with
                cross-platform to reach the maximum amrount of users.
            </p>
            <PlatformSelection />
        </div>
    );
}

export default getStarted;
