import React from 'react';
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
    "Faster AI.",
    "Better AI.",
    "Scalable AI.",
];

const TextTrans = () => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
                setIndex(index => index + 7),
            7000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <h1>
            <TextTransition springConfig={presets.gentle}>
                {TEXTS[ index % TEXTS.length]}
            </TextTransition>
        </h1>
    );
};


export default TextTrans;