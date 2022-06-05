import { Box } from "@mui/material";
import { useEffect, useState } from "react";

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
  return (
    <Box sx={{ boxShadow: 3 }}>
      <Box>{dot.name}</Box>
      <Box>Coords: {dot.coords.join(" ")}</Box>
      <Box>{weather ? weather.name : false}</Box>
    </Box>
  );
}

export default CurrentWeather;
