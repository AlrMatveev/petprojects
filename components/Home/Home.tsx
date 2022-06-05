import Header from "./Header";
import { Box, Container } from "@mui/material";

function Home() {
  return (
    <Container maxWidth="lg">
      {/* <Header /> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ m: 3 }}>
          <Box>Меня зовут Александр, я изучаю FrontEnd</Box>
          <Box>Сейчас нахожусь в активном поиске работы.</Box>
        </Box>
        <Box sx={{ m: 3 }}>
          <Box>Мой стек технологий</Box>
          <Box>
            HTML, CSS, JS, React, Redux, Redux Toolkit, Nextjs, MUI, Bootsrap,
            Firebase.
          </Box>
          <Box>
            Сейчас Изучаю TypeScript, в дальнейшем планирую React Native.
          </Box>
        </Box>
        <Box sx={{ m: 3 }}>
          <Box>Также знаком с CMS</Box>
          <Box>Joomla, WordPress, OpenCart, Shop-Script, WebAsyst</Box>
        </Box>
        <Box sx={{ m: 3 }}>
          <Box>Графические редакторы</Box>
          <Box>Adobe Photoshop, CorelDraw, Figma, и даже Paint</Box>
        </Box>
        <Box sx={{ m: 3 }}>
          <Box>
            Проекты в которых я участвовал. Большинство из них, к сожалению, не
            закончены.
          </Box>
          <Box>
            <a href="https://wetop.ru/" target="_blank" rel="noreferrer">
              Сайт digital-агентства - одностраничник.
            </a>
          </Box>
          <Box>
            <a
              href="https://corp-pitanie.tyteda.ru/"
              target="_blank"
              rel="noreferrer"
            >
              Сайт корпоративного питания - React, Redux, Nextjs, c админкой и
              личным кабинетом.
            </a>
          </Box>
          <Box>
            <a
              href="https://frantsuz-club.ru/booking-new/"
              target="_blank"
              rel="noreferrer"
            >
              Система бронирования бильярдных столов - React, Redux, Firebase
              внутри WordPress'а.
            </a>
          </Box>
          <Box>
            <a
              href="https://xn--80aamqmn7eb2e.xn--p1ai/"
              target="_blank"
              rel="noreferrer"
            >
              Интернет магазин - React, Redux, Nextjs, API Яндекс карт, c
              админкой.
            </a>
          </Box>
        </Box>
        <Box sx={{ m: 3 }}>+7(977)375-92-82 WhatsApp Telegram</Box>
      </Box>
    </Container>
  );
}

export default Home;
