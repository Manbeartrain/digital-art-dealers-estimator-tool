import Link from "next/link";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {BsFillChatDotsFill} from "react-icons/bs";
import {AiFillCamera, AiFillCreditCard, AiFillDatabase} from "react-icons/ai";
import {MdLocationOn} from "react-icons/md";
import {IoLanguageSharp} from "react-icons/io5";
import {FaUserAlt, FaEthereum} from "react-icons/fa";
import {RiUserVoiceFill, RiLiveFill} from "react-icons/ri";
import MultiSelection from "./MultiSelection";
import {setFeatures} from "../redux/DataSlice";

function FeatureSelection() {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState([]);

    const handleSelection = value => {
        const selectedCopy = [...selected];
        if (selectedCopy.includes(value)) {
            const filteredCopy = selectedCopy.filter(item => item !== value);
            setSelected(filteredCopy);
        } else {
            selectedCopy.push(value);
            setSelected(selectedCopy);
        }
    };

    const handleFeatures = () => {
        dispatch(setFeatures(selected));
    };

    return (
        <div className="mt-8 w-full  flex justify-center items-center flex-col lg:w-1/2">
            <div className="flex gap-x-6 lg:gap-x-24 gap-y-8 mt-8 lg:mt-2 flex-wrap justify-center">
                <MultiSelection
                    icon={<MdLocationOn className="text-6xl" />}
                    title="Location"
                    handleSelection={handleSelection}
                    value={selected}
                />
                <MultiSelection
                    icon={<IoLanguageSharp className="text-5xl" />}
                    title="Languages"
                    handleSelection={handleSelection}
                    value={selected}
                />
                <MultiSelection
                    icon={<AiFillCamera className="text-6xl" />}
                    title="Camera"
                    handleSelection={handleSelection}
                    value={selected}
                />
                <MultiSelection
                    icon={<FaUserAlt className="text-6xl" />}
                    title="Profiles"
                    handleSelection={handleSelection}
                    value={selected}
                />
                <MultiSelection
                    icon={<AiFillCreditCard className="text-6xl" />}
                    title="Payments"
                    handleSelection={handleSelection}
                    value={selected}
                />
                <MultiSelection
                    icon={<RiLiveFill className="text-6xl" />}
                    title="Streaming"
                    handleSelection={handleSelection}
                    value={selected}
                />
                <MultiSelection
                    icon={<BsFillChatDotsFill className="text-6xl" />}
                    title="Chat"
                    handleSelection={handleSelection}
                    value={selected}
                />
                <MultiSelection
                    icon={<FaEthereum className="text-6xl" />}
                    title="Web 3"
                    handleSelection={handleSelection}
                    value={selected}
                />
                <MultiSelection
                    icon={<RiUserVoiceFill className="text-6xl" />}
                    title="Voice"
                    handleSelection={handleSelection}
                    value={selected}
                />
                <MultiSelection
                    icon={<AiFillDatabase className="text-6xl" />}
                    title="Business"
                    handleSelection={handleSelection}
                    value={selected}
                />
            </div>
            {selected.length !== 0 ? (
                <Link
                    onClick={handleFeatures}
                    href="/complexity"
                    className="w-[90%] lg:w-80 h-14 rounded-lg bg-blue-600 flex justify-center items-center mt-8 lg:mt-16 cursor-pointer">
                    <p className="text-white text-lg font-bold tracking-widest uppercase">
                        Next
                    </p>
                </Link>
            ) : (
                <div className="h-14 w-[90%] mt-8 lg:mt-16" />
            )}
            <p className="text-xs lg:text-sm text-gray-400 mt-8 text-center px-4 font-light lg:w-2/4 lg:mt-16">
                While we try our best to match the estimates given by this app,
                please understand that these are ESTIMATES ONLY and final
                pricing may change
            </p>
        </div>
    );
}

export default FeatureSelection;
