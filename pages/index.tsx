import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Home from "../components/Home/Home";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Home />
    </>
  );
};

export default HomePage;
