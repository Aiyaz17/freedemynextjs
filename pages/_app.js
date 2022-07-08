import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const handleRouteChange = (url) => {
    window.gtag("config", "[G-BW8HRKG1M8]", {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
