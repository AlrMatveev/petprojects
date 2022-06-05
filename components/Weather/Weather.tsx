import { Container, Grid } from "@mui/material";
import Ymaps from "./ymaps";
import { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Header from "./Header";

function Weather() {
  const [dot, setDot] = useState({
    name: "Москва,Центральный административный округ,Тверской район,Кремль",
    coords: [55.75329312311498, 37.61864380418606],
  });

  return (
    <Container maxWidth="lg">
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Ymaps dot={dot} setDot={setDot} />
        </Grid>
        <Grid item xs={12} md={6}>
          <CurrentWeather dot={dot} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Weather;
