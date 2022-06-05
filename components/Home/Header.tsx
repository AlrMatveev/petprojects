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
      <a href="https://github.com/AlrMatveev/petprojects" target="_blank">
        GitHub
      </a>
    </Box>
  );
}

export default Header;
