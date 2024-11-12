import React, { useState, useEffect } from "react";

const TypeWriter = ({ text, className, ...props  }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex(index + 1);
            }, 30); // Velocidad de escritura ajustable

            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return <p className={className} {...props}>{displayedText}</p>;
};

export default TypeWriter;