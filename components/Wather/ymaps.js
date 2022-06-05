import { useEffect } from "react";

function Ymaps() {
  useEffect(() => {
    function loadScript(src, callback) {
      let script = document.createElement("script");
      script.src = src;

      script.onload = () => callback(script);

      document.head.append(script);
    }

    loadScript(
      "https://api-maps.yandex.ru/2.1/?apikey=b6c08aa6-dd71-4a2e-b53d-01c79b3f1e83&lang=ru_RU",
      function () {
        ymaps.ready(init);
      }
    );

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.

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
  });
  return (
    <>
      <div id="map" style={{ width: "600px", height: "400px" }}></div>
    </>
  );
}

export default Ymaps;
