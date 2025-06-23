import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollRestoration = () => {
    const location = useLocation();

    useEffect(() => {
        const saveScrollPosition = () => {
            sessionStorage.setItem(
                `scroll-${location.pathname}`, 
                window.scrollY.toString()
            );
        };

        const restoreScrollPosition = () => {
            const savedPosition = sessionStorage.getItem(`scroll-${location.pathname}`);
            
            if (savedPosition) {
                window.scrollTo(0, parseInt(savedPosition));
            }
        };

        window.addEventListener('beforeunload', saveScrollPosition);
        
        setTimeout(restoreScrollPosition, 100); 

        return () => {
            window.removeEventListener('beforeunload', saveScrollPosition);
        };
    }, [location.pathname]);
};