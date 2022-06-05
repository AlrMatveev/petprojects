import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";

function CurrentWeather({ dot }: any) {
  const [weather, setWeather] = useState<any>({});
  useEffect(() => {
    async function getWeather() {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${dot.coords[0]}&lon=${dot.coords[1]}&appid=7f6b4081e42acb33bcce11a03f4d3526`
      );
      const currentWeather = await response.json();

      setWeather(currentWeather);
    }
    getWeather();
  }, [dot]);

  console.log(weather);

  return (
    <Box sx={{ boxShadow: 2, p: 2, backgroundColor: "white" }}>
      <Box>{dot.name}</Box>
      <Box>Координаты: {dot.coords.join(" ")}</Box>
      <Box>
        {weather && weather.main ? (
          <>
            <img
              src={
                "http://openweathermap.org/img/w/" +
                weather.weather[0].icon +
                ".png"
              }
              alt="Icon depicting current weather."
            />
            <Box>Температура: {Math.round(weather.main.temp - 273.15)} С</Box>
            <Box>Влажность: {Math.round(weather.main.humidity)} %</Box>
            <Box>Скорочть ветра: {Math.round(weather.wind.speed)} м/с</Box>
            <Box>Порывы ветра до: {Math.round(weather.wind.gust)} м/с</Box>
          </>
        ) : (
          false
        )}
      </Box>
    </Box>
  );
}

export default CurrentWeather;

// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=7f6b4081e42acb33bcce11a03f4d3526

// http://api.openweathermap.org/data/2.5/weather?lat=${dot.coords[0]}&lon=${dot.coords[1]}&appid=7f6b4081e42acb33bcce11a03f4d3526
