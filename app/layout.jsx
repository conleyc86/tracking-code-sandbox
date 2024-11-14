import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { useEffect } from 'react';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    useEffect(() => {
        const initMunchkin = () => {
            if (!window.didInit) {
                window.didInit = true;
                window.Munchkin.init('509-TVZ-333', { altIds: ['168-CRJ-586'] });
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
        document.head.appendChild(script);
    }, []);

    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-blue-900">
                <div className="flex flex-col min-h-screen px-6 bg-grid-pattern sm:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <div className="grow">{children}</div>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
