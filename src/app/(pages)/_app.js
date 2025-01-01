import { useEffect } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Google Analytics (gtag.js)
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-5PVC62L8QP');
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-5PVC62L8QP"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
