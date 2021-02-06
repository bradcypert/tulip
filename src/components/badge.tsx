import React from "react";

const Badge: React.FunctionComponent<any> = ({children, color}) => {
    const bg = color ? `bg-${color}-400` : "";
    const hover = color ? `hover:bg-${color}-500 hover:text-${color}-900` : "";
    const text = color ? `text-${color}-800` : "";
    const border = color ? `border-${color}-600` : "border-gray-600";
    return (
        <span className={`inline-block p-2 m-1 ${bg} ${hover} ${text} rounded border ${border}`}>
            {children}
        </span>
    );
};

export default Badge;