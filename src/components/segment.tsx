import React from "react";

interface Props {
    color?: string;
}

const Segment: React.FunctionComponent<Props> = ({color, children}) => {
    const bg = color ? `bg-${color}-300` : "";
    const text = color ? `text-${color}-900` : "";
    const border = color ? `border-${color}-600` : "border-gray-600";
    return (
        <div className={`py-3 px-2 my-2 ${bg} ${text} ${border}`}>
            {children}
        </div>
    );
};

export default Segment;