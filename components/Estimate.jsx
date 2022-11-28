import Link from "next/link";
import React, {useEffect} from "react";
import useEstimator from "../hooks/useEstimator";
import {SITE_LINKS} from "../utils/constants";

function Estimate() {
    const {getEstimate, isLoading, totalHours, projectEstimate} =
        useEstimator();

    useEffect(() => {
        getEstimate();
    }, []);

    return (
        <div className="w-full lg:w-1/3 flex flex-col mt-8 px-8 justify-center items-center">
            <div className="w-full mt-8 flex rounded-lg flex-col justify-center items-center">
                {isLoading ? null : (
                    <>
                        <p className="text-3xl font-bold uppercase text-center">
                            Price / Hour Estimation
                        </p>
                        <p className="text-lg font-normal tracking-widest mt-4 text-center">
                            $ {projectEstimate.toFixed(2)} /{" "}
                            {totalHours.toFixed(2)} Hours
                        </p>
                    </>
                )}
            </div>

            <Link
                href={SITE_LINKS.UPWORK}
                target="_blank"
                className="w-full lg:w-[50%] h-14 rounded-lg bg-blue-600 flex justify-center items-center mt-16 lg:mt-16 cursor-pointer">
                <p className="text-white text-lg font-bold tracking-widest uppercase">
                    Hire Us On Upwork
                </p>
            </Link>
            <p className="text-xs lg:text-sm text-gray-400 mt-8 text-center px-4 font-light lg:w-3/4 lg:mt-16">
                While we try our best to match the estimates given by this app,
                please understand that these are ESTIMATES ONLY and final
                pricing may change
            </p>
        </div>
    );
}

export default Estimate;
