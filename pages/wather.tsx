import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Wather from "../components/Wather/Wather";

const WatherPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wather</title>
        <meta name="description" content="Wather" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Wather />
    </>
  );
};

export default WatherPage;
