import { Box } from "@mui/material";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        m: 5,
        textAlign: "center",
      }}
    >
      Кликни по карте - узнаешь погоду.
      <br />
      Использовал Яндекс API + OpenWeather API
    </Box>
  );
}

export default Header;
