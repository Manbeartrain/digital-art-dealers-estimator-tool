import Link from "next/link";
import React from "react";

function Testimonials() {
    return (
        <div className="py-16 flex justify-center items-center flex-col px-8 w-full">
            <p className="text-5xl lg:text-6xl uppercase text-black font-extrabold text-center">
                Testimonials
            </p>
            <p className="font-normal text-lg text-gray-400 text-center  lg:w-1/3">
                We could tell you so much, but proof speaks for itself. Here is
                what our clients are saying about us on Upwork, LinkedIn and
                more!
            </p>
            <div className="flex justify-center items-center w-full gap-x-4 mt-8 flex-col lg:flex-row ">
                <div className="flex justify-center items-start bg-gray-100 rounded-lg h-auto lg:h-40 w-full lg:w-1/3 px-8 py-8 text-center lg:text-left">
                    <p className="text-lg text-gray-400 font-light">
                        Gabe has been an MVP candidate form day 1 at Journey. He
                        is an execptionally talented engineer, a natural leader,
                        and eually important - a genuinely nice and fun...
                    </p>
                </div>
                <div className="flex justify-center items-start bg-gray-100 rounded-lg h-auto lg:h-40 w-full lg:w-1/3 px-8 py-8 mt-4 lg:mt-0 text-center lg:text-left">
                    <p className="text-lg text-gray-400 font-light">
                        Working with Gabriel was a complete pleasure. the task
                        was to create a cross platform app to be a user
                        interface to an existing backend service...
                    </p>
                </div>
            </div>
            <Link
                href="https://digitalartdealers.net/#reviews"
                target="_blank"
                className="mt-16 w-full py-4 border-4 border-[#10172a] rounded-lg flex justify-center items-center lg:w-80 hover:bg-[#10172a] transition-all ease-in-out text-[#10172a] hover:text-white">
                <p className="text-xl font-bold tracking-widest uppercase">
                    I want to see more
                </p>
            </Link>
        </div>
    );
}

export default Testimonials;
