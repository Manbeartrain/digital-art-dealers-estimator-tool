import React from "react";

function Selection({icon, title, handleSelection, value}) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div
                onClick={() => handleSelection(title)}
                className="h-24 w-24  rounded-lg flex justify-center items-center cursor-pointer"
                style={{
                    borderWidth: value === title ? 0 : 4,
                    borderColor: value === title ? "transparent" : "white",
                    backgroundColor:
                        value === title ? "#2563eb" : "transparent",
                }}>
                {icon}
            </div>
            <p className="text-white text-base font-bold text-center mt-4">
                {title}
            </p>
        </div>
    );
}

export default Selection;
