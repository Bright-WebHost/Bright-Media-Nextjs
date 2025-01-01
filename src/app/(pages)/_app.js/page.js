// pages/_app.js
import React, { useEffect } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-5PVC62L8QP');
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

export default MyApp;
