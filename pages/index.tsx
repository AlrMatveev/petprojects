import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Cube from "../components/Home/Cube";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Cube />
    </>
  );
};

export default Home;
