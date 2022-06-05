import { Box } from "@mui/material";
import { useEffect, useState } from "react";

function CurrentWeather({ dot }: any) {
  const [weather, setWeather] = useState<any>({});
  useEffect(() => {
    async function getWeather() {
      let response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=7f6b4081e42acb33bcce11a03f4d3526`
      );
      const currentWeather = await response.json();
      console.log(currentWeather);
      setWeather(currentWeather);
    }
    getWeather();
  }, [dot]);
  return (
    <Box sx={{ boxShadow: 3 }}>
      <Box>{dot.name}</Box>
      <Box>Coords: {dot.coords.join(" ")}</Box>
      <Box>{weather ? weather.name : false}</Box>
    </Box>
  );
}

export default CurrentWeather;

// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=7f6b4081e42acb33bcce11a03f4d3526

// http://api.openweathermap.org/data/2.5/weather?lat=${dot.coords[0]}&lon=${dot.coords[1]}&appid=7f6b4081e42acb33bcce11a03f4d3526
