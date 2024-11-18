'use client';

import { useEffect } from 'react';

export default function Tracking() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            console.log('Tracking component mounted.');

            // Log when the page reloads completely
            if (performance.navigation.type === 1) {
                console.log('Page reloaded completely.');
            }

            // Log changes to the path
            const logPathChange = () => {
                console.log(`Path changed to: ${window.location.pathname}`);
            };

            // Handle link clicks
            const logLinkClick = (event) => {
                const target = event.target.closest('a');
                if (target && target.href) {
                    console.log(`Link clicked: ${target.href}`);
                }
            };

            // Add event listeners
            window.addEventListener('popstate', logPathChange);
            document.addEventListener('click', logLinkClick);

            // Initial log of the current path
            console.log(`Initial path: ${window.location.pathname}`);

            // Cleanup listeners on unmount
            return () => {
                console.log('Tracking component unmounted.');
                window.removeEventListener('popstate', logPathChange);
                document.removeEventListener('click', logLinkClick);
            };
        }
    }, []);

    return null; // This component adds behavior but renders nothing
}
