import { Container, Grid } from "@mui/material";
import Ymaps from "./ymaps";
import { useState } from "react";

function Wather() {
  const [coords, setCoords] = useState(null);
  console.log(coords);
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} md={6}>
          <Ymaps setCoords={setCoords} />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Container>
  );
}

export default Wather;
