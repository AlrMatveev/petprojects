import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Ymaps from "../components/Wather/ymaps";

const Wather: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wather</title>
        <meta name="description" content="Wather" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://api-maps.yandex.ru/2.1/?apikey=b6c08aa6-dd71-4a2e-b53d-01c79b3f1e83&lang=ru_RU"
          type="text/javascript"
        ></script>
      </Head>
      <Navigation />
      <Ymaps />
    </>
  );
};

export default Wather;
