import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Cube from "../components/Cube/Cube";

const CubePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cube</title>
        <meta name="description" content="Cube" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Cube />
    </>
  );
};

export default CubePage;
