import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import Navigation from "../components/Navigation";

const Wather: NextPage = () => {
  useEffect(() => {
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init() {
      // Создание карты.
      var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7,
      });
    }
  }, []);
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
      <div id="map" style={{ width: "600px", height: "400px" }}></div>
    </>
  );
};

export default Wather;
