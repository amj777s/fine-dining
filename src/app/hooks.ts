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
    const [isIntersecting, setIntersection] = useState<boolean>(false);
    const[intersectionCounter, setCounter] = useState<number>(0); 
    
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersection(entry.isIntersecting);
            setCounter( n => n + 1); // allows instersectionCounter to properly update;

            
        } 
        , {threshold: 0.1});

        
        observer.observe(ref.current);
        return () => {
           
          observer.disconnect();
        };
      }, [ref]);

    // keeps visibility from disappearing after first intersection of viewport

    if(intersectionCounter >=2){
        return true
    }
      return isIntersecting;
}