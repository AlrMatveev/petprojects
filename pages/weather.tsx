import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Weather from "../components/Weather/Weather";

const WeatherPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Weather</title>
        <meta name="description" content="Weather" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Weather />
    </>
  );
};

export default WeatherPage;
