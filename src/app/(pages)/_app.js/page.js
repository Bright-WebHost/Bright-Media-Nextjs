import { useEffect } from 'react';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-5PVC62L8QP');
      console.log("Google Analytics initialized.");
    }
  }, []);

  return (
    <>
      {/* Add Google Tag Manager */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5PVC62L8QP"
      />
      <Component {...pageProps} />
    </>
  );
}
