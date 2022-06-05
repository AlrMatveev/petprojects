import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";

const menu = [
  { name: "Home", href: "/" },
  { name: "Wather", href: "/wather" },
];

function Navigation() {
  const router = useRouter();

  const handleClick = (event: any) => {
    event.preventDefault();
    router.push(event.target.href);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {menu.map((item, i) => {
        return (
          <Button key={i} href={item.href} onClick={handleClick}>
            {item.name}
          </Button>
        );
      })}
    </Box>
  );
}

export default Navigation;
