import { useState, useEffect } from "react";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<number>(0);
    useEffect(()=> {
        const size = window.screen.width;
        setWindowSize(size);
    })

    return windowSize
};