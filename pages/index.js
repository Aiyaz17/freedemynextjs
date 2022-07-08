import Home from "../components/Home";
import Head from "next/head";
import Meta from "../components/Meta";
import Script from "next/Script";
export default function In() {
  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BW8HRKG1M8"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-BW8HRKG1M8');

        `}
      </Script>

      <Meta />
      <Home />
    </>
  );
}
