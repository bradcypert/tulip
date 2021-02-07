import React from "react";

interface Props {
    content: any;
    trigger: any;
};

const Popup: React.FunctionComponent<Props> = ({content, children}) => {
    return(
        <span className="group inline-block relative">
            <span>{children}</span>
            <div className="p-2 absolute hidden group-hover:block border border-red-400 bg-red-500 rounded w-64" style={{transform: "translateX(-1.5rem)"}}>{content}</div>
        </span>
    )
}

export default Popup;