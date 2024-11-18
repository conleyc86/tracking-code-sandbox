'use client';

import { useEffect } from 'react';

export default function Tracking() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Tracking code logic here
            console.log('Tracking code executed');
        }
    }, []);

    return null; // This component adds behavior but renders nothing
}
