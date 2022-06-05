import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
    </>
  );
};

export default Home;
