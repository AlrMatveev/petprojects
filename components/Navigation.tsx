import { Container, Box, ButtonGroup, Button } from "@mui/material";
import { useRouter } from "next/router";

const menu = [
  { name: "Главная", href: "/" },
  { name: "Погода", href: "/weather" },
  { name: "Куб", href: "/cube" },
];

function Navigation() {
  const router = useRouter();

  const handleClick = (event: any) => {
    event.preventDefault();
    router.push(event.target.href);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
        <ButtonGroup variant="contained">
          {menu.map((item, i) => {
            return (
              <Button key={i} href={item.href} onClick={handleClick}>
                {item.name}
              </Button>
            );
          })}
        </ButtonGroup>
      </Box>
    </Container>
  );
}

export default Navigation;
