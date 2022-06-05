import { Container, Box, Button } from "@mui/material";
import { useRouter } from "next/router";

const menu = [
  { name: "Home", href: "/" },
  { name: "Weather", href: "/weather" },
];

function Navigation() {
  const router = useRouter();

  const handleClick = (event: any) => {
    event.preventDefault();
    router.push(event.target.href);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {menu.map((item, i) => {
          return (
            <Button key={i} href={item.href} onClick={handleClick}>
              {item.name}
            </Button>
          );
        })}
      </Box>
    </Container>
  );
}

export default Navigation;
