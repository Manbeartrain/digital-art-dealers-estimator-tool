import React, {useState} from "react";
import {useDispatch} from "react-redux";

import {ImHappy2} from "react-icons/im";
import {BsFillEmojiNeutralFill, BsFillEmojiAngryFill} from "react-icons/bs";
import Link from "next/link";
import Selection from "./Selection";
import {setComplexity} from "../redux/DataSlice";

function ComplexitySelection() {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(null);
    const handleSelection = value => {
        setSelected(value);
    };

    const handleComplexity = () => {
        dispatch(setComplexity(selected));
    };

    return (
        <div className=" w-full  flex justify-center items-center flex-col">
            <div className="flex gap-x-6 lg:gap-x-24 mt-8 lg:mt-2">
                <Selection
                    icon={<ImHappy2 className="text-6xl" />}
                    title="Simple"
                    handleSelection={handleSelection}
                    value={selected}
                />
                <Selection
                    icon={<BsFillEmojiNeutralFill className="text-6xl" />}
                    title="Intermediate"
                    handleSelection={handleSelection}
                    value={selected}
                />
                <Selection
                    icon={<BsFillEmojiAngryFill className="text-6xl" />}
                    title="Complicated"
                    handleSelection={handleSelection}
                    value={selected}
                />
            </div>
            {selected ? (
                <Link
                    onClick={handleComplexity}
                    href="/estimation"
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

export default ComplexitySelection;
