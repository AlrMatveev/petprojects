import Header from "./Header";
import styles from "../../styles/Home.module.css";
import { useEffect } from "react";
import { ButtonGroup, Button, Container, Box } from "@mui/material";

const nav = [
  { name: "One", side: styles.front, rotate: "0deg", text: "1" },
  { name: "Two", side: styles.back, rotate: "-90deg", text: "2" },
  { name: "Three", side: styles.right, rotate: "-180deg", text: "3" },
  { name: "Four", side: styles.left, rotate: "-270deg", text: "4" },
];

function Cube() {
  useEffect(() => {
    // const cube: HTMLElement | null = document.getElementById("cube");
    // if (cube) {
    //   cube.addEventListener("pointerdown", (event) => {
    //     console.log(event.offsetX);
    //   });
    // }
  }, []);

  const handleClick = (event: any): void => {
    const cube: HTMLElement | null = document.getElementById("cube");
    if (cube) {
      cube.style.transform = "rotateY(" + nav[event.target.value].rotate + ")";
    }
  };

  return (
    <Container maxWidth="lg">
      {/* <Header /> */}
      <Box
        sx={{
          m: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ButtonGroup onClick={handleClick} variant="text">
          {nav.map((item, i) => {
            return (
              <Button key={i} value={i}>
                {item.name}
              </Button>
            );
          })}
        </ButtonGroup>
      </Box>
      <Box className={styles.container}>
        <Box id="cube" className={styles.cube}>
          {nav.map((item, i) => {
            return (
              <Box key={i} className={item.side}>
                {item.text}
              </Box>
            );
          })}
          <Box className={styles.top}>5</Box>
          <Box className={styles.bottom}>2</Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Cube;
