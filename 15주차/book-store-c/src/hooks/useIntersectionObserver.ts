import { useEffect, useRef } from "react";

type Callback = (entries: IntersectionObserverEntry[]) => void;

interface ObserverOptions {
    root?: Element | null; // 기준점
    rootMargin?: string; // 교차되는 거리
    threshold?: number | number[]; // 교차 비율 
}

export const useIntersectionObserver = (callback: Callback, options?: ObserverOptions) => {
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        }
    });

    return targetRef;
};