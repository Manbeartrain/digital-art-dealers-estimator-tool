import Link from "next/link";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {BsFillLightbulbFill, BsFillBugFill} from "react-icons/bs";
import {FaNetworkWired, FaHardHat} from "react-icons/fa";
import {IoMdRocket} from "react-icons/io";
import Selection from "./Selection";
import {setProgress} from "../redux/DataSlice";

function ProgressSelection() {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(null);
    const handleSelection = value => {
        setSelected(value);
    };

    const handleAppProgression = () => {
        dispatch(setProgress(selected));
    };

    return (
        <div className="mt-8 w-full  flex justify-center items-center flex-col">
            <div className="flex gap-x-6 lg:gap-x-24 gap-y-8 mt-8 lg:mt-2 flex-wrap justify-center">
                <Selection
                    icon={<BsFillLightbulbFill className="text-6xl" />}
                    title="Idea"
                    handleSelection={handleSelection}
                    value={selected}
                />
                <Selection
                    icon={<FaNetworkWired className="text-6xl" />}
                    title="Wireframe"
                    handleSelection={handleSelection}
                    value={selected}
                />
                <Selection
                    icon={<BsFillBugFill className="text-6xl" />}
                    title="Prototype"
                    handleSelection={handleSelection}
                    value={selected}
                />
                <Selection
                    icon={<FaHardHat className="text-6xl" />}
                    title="Development"
                    handleSelection={handleSelection}
                    value={selected}
                />
                <Selection
                    icon={<IoMdRocket className="text-6xl" />}
                    title="Launched"
                    handleSelection={handleSelection}
                    value={selected}
                />
            </div>
            {selected ? (
                <Link
                    onClick={handleAppProgression}
                    href="/features"
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

export default ProgressSelection;
