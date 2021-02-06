import React from "react";

interface Props {
    circular?: boolean;
    width: string;
    height: string;
    src: string;
    alt: string;
    style: any;
}

const Image: React.FunctionComponent<Props> = ({src, circular, width, height, alt, style}) => {
    let styles = Object.assign({}, style,
        circular ? {
            borderRadius: "500em"
        } : {},
        );

    return (
        <img src={src} alt={alt} className={`w-${width} h-${height}`} style={styles} / >
    );
};

export default Image;