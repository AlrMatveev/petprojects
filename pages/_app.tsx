import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    <script src="https://unpkg.com/react-yandex-maps/dist/production/react-yandex-maps.umd.js"></script>;
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
