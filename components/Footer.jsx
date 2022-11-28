import React from "react";
import {SITE_LINKS} from "../utils/constants";

function Footer() {
    const handleGithubRedirection = () => {
        window.open(SITE_LINKS.GITHUB, "_blank");
    };

    const handleMediumRedirection = () => {
        window.open(SITE_LINKS.MEDIUM, "_blank");
    };

    const handleTwitterRedirection = () => {
        window.open(SITE_LINKS.TWITTER, "_blank");
    };

    const handleUpworkRedirection = () => {
        window.open(SITE_LINKS.UPWORK, "_blank");
    };
    return (
        <footer className="pt-16 w-full bg-[#1e293b] flex justify-center items-center flex-col ">
            <img
                src="/2-brothers.png"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white"
            />
            <p className="text-green-300 uppercase font-bold text-4xl mt-8 tracking-widest px-8 text-center">
                digital art dealers
            </p>
            <p className="text-gray-400 text-lg mt-2 px-8 text-center font-light">
                Making mobile development easier on line of code at a time
            </p>
            <p className="text-2xl font-extrabold text-green-300 mt-8 tracking-widest uppercase">
                follow us on
            </p>
            <div className="h-1 w-[35px] bg-green-300 my-6" />
            <div className="flex flex-wrap  py-4 w-3/4 gap-x-4 gap-y-4 justify-center">
                <div
                    onClick={handleGithubRedirection}
                    className="w-32 flex justify-center items-center h-16 rounded-lg border-4 border-green-300 hover:bg-green-300 hover:text-black text-green-300 cursor-pointer transition-all ease-in-out">
                    <p className="uppercase text-lg font-extrabold tracking-widest">
                        github
                    </p>
                </div>
                <div
                    onClick={handleMediumRedirection}
                    className="w-32 flex justify-center items-center h-16 rounded-lg border-4 border-green-300 hover:bg-green-300 hover:text-black text-green-300 cursor-pointer transition-all ease-in-out">
                    <p className="uppercase text-lg font-extrabold tracking-widest">
                        medium
                    </p>
                </div>
                <div
                    onClick={handleTwitterRedirection}
                    className="w-32 flex justify-center items-center h-16 rounded-lg border-4 border-green-300 hover:bg-green-300 hover:text-black text-green-300 cursor-pointer transition-all ease-in-out">
                    <p className="uppercase text-lg font-extrabold tracking-widest">
                        twitter
                    </p>
                </div>
                <div
                    onClick={handleUpworkRedirection}
                    className="w-32 flex justify-center items-center h-16 rounded-lg border-4 border-green-300 hover:bg-green-300 hover:text-black text-green-300 cursor-pointer transition-all ease-in-out">
                    <p className="uppercase text-lg font-extrabold tracking-widest">
                        upwork
                    </p>
                </div>
            </div>
            <div className="py-6 bg-[#334154] w-full mt-16 justify-center items-center">
                <p className="text-gray-500 text-sm text-center">
                    © 2022 Digital Art Dealers. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
