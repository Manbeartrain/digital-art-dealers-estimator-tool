import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {AiFillAndroid} from "react-icons/ai";
import {GiDualityMask} from "react-icons/gi";
import {FaAppStoreIos} from "react-icons/fa";
import Link from "next/link";
import Selection from "./Selection";
import {setPlatform} from "../redux/DataSlice";

function PlatformSelection() {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(null);
    const handleSelection = value => {
        setSelected(value);
    };

    const handlePlatform = () => {
        dispatch(setPlatform(selected));
    };

    return (
        <div className="mt-8 w-full  flex justify-center items-center flex-col">
            <div className="flex gap-x-6 lg:gap-x-24 mt-8 lg:mt-2">
                <Selection
                    icon={<FaAppStoreIos className="text-6xl" />}
                    title="ios"
                    handleSelection={handleSelection}
                    value={selected}
                />
                <Selection
                    icon={<AiFillAndroid className="text-6xl" />}
                    title="android"
                    handleSelection={handleSelection}
                    value={selected}
                />
                <Selection
                    icon={<GiDualityMask className="text-6xl" />}
                    title="both"
                    handleSelection={handleSelection}
                    value={selected}
                />
            </div>
            {selected ? (
                <Link
                    onClick={handlePlatform}
                    href="/process"
                    className="w-[90%] lg:w-80 h-14 rounded-lg bg-blue-600 flex justify-center items-center mt-8 lg:mt-16 cursor-pointer">
                    <p className="text-white text-lg font-bold tracking-widest uppercase">
                        Next
                    </p>
                </Link>
            ) : (
                <div className="h-14 w-[90%] mt-8 lg:mt-16" />
            )}
            <p className="text-xs lg:text-sm text-gray-400 mt-8 text-center px-4 font-light lg:w-1/4 lg:mt-16">
                While we try our best to match the estimates given by this app,
                please understand that these are ESTIMATES ONLY and final
                pricing may change
            </p>
        </div>
    );
}

export default PlatformSelection;
