import React from "react";

interface Props {
    color: string;
}

const Button: React.FunctionComponent<Props> = ({children, color}) => {
    return (
        <button className={`p-2 my-2 bg-${color}-500 text-white rounded-md focus:outline-none focus:ring-2 ring-${color}-300 ring-offset-2`}>{children}</button>
    );
}

export default Button;