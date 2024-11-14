import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <script type="text/javascript">
                (function() {
                  var didInit = false;
                  function initMunchkin() {
                    if(didInit === false) {
                      didInit = true;
                      Munchkin.init('509-TVZ-333', { altIds:['168-CRJ-586'] });
                    }
                  }
                  var s = document.createElement('script');
                  s.type = 'text/javascript';
                  s.async = true;
                  s.src = '//munchkin.marketo.net/munchkin.js';
                  s.onreadystatechange = function() {
                    if (this.readyState == 'complete' || this.readyState == 'loaded') {
                      initMunchkin();
                    }
                  };
                  s.onload = initMunchkin;
                  document.getElementsByTagName('head')[0].appendChild(s);
                })();
                </script>
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
