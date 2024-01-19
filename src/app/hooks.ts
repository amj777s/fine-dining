import { useState, useEffect } from "react";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<number>(0);
    useEffect(()=> {
        const size = window.screen.width;
        setWindowSize(size);
    })

    return windowSize
};

export const useIsVisible = (ref:any) => {
    const [isIntersecting, setIntersection] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersection(entry.isIntersecting)
        } 
        );
        
        observer.observe(ref.current);
        return () => {
          observer.disconnect();
        };
      }, [ref]);
    
      return isIntersecting;
}