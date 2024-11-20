'use client';

import { useEffect } from 'react';

export default function Tracking() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            console.log('Tracking component mounted.');

            // Inject the Munchkin tracking script
            let didInit = false;
            const initMunchkin = () => {
                if (!didInit) {
                    didInit = true;
                    if (window.Munchkin) {
                        // window.Munchkin.init('509-TVZ-333', { altIds: ['168-CRJ-586'] });
                        window.Munchkin.init('168-CRJ-586');
                    } else {
                        console.error('Munchkin script did not load.');
                    }
                }
            };

            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = '//munchkin.marketo.net/munchkin.js';
            script.onload = initMunchkin;
            script.onreadystatechange = function () {
                if (this.readyState === 'complete' || this.readyState === 'loaded') {
                    initMunchkin();
                }
            };

            document.getElementsByTagName('head')[0].appendChild(script);

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
