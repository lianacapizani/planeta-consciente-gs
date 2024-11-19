import React from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  IconButton,
  Button,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Title } from "../../common-components/Title";

export function Challenges() {
  const scrollContainer = React.useRef();

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const challenges = [
    {
      title: "Desafio Sustentável",
      description:
        "Recolha 10kg de plástico e ganhe cupons de desconto exclusivos.",
      category: "🌿 Sustentabilidade",
    },
    {
      title: "Economia de Energia",
      description: "Reduza o consumo energético em 20% na sua casa este mês.",
      category: "⚡ Eficiência Energética",
    },
    {
      title: "Reciclagem Criativa",
      description: "Crie um objeto útil usando materiais reciclados.",
      category: "♻️ Criatividade Sustentável",
    },
    {
      title: "Transporte Verde",
      description:
        "Adote o uso de bicicleta ou transporte público por 15 dias.",
      category: "🚲 Mobilidade Urbana",
    },
    {
      title: "Economia Hídrica",
      description: "Reduza o consumo de água em 30% durante o próximo mês.",
      category: "💧 Consumo Consciente",
    },
  ];

  return (
    <Box
      id="challenges"
      sx={{
        position: "relative",
        backgroundImage:
          "linear-gradient(to bottom, rgba(8, 22, 21, .8) 0% ,rgba(200, 220, 221, 0.1) 50%, rgba(9, 22,21, .9)), url(/assets/images/challenges2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "var(--light-text)",
        padding: "80px 20px 100px 20px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(9, 22, 21, 0.7)",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Title sectionName="Desafios do Planeta Positivo" />
        <Typography
          variant="body1"
          align="center"
          sx={{
            fontSize: "1.2rem",
            color: "var(--light-text)",
            marginBottom: "40px",
          }}
        >
          Transforme a sustentabilidade em um jogo e ganhe recompensas
          exclusivas enquanto ajuda a cuidar do planeta.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            marginTop: "20px",
          }}
        >
          <IconButton
            onClick={scrollLeft}
            sx={{
              position: "absolute",
              left: "-50px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 3,
              backgroundColor: "#297b4e90",
              "&:hover": { backgroundColor: "var(--bg-button-hover)" },
              color: "var(--light-text) 0.2",
              height: "40px",
              width: "40px",
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <Box
            ref={scrollContainer}
            sx={{
              display: "flex",
              overflowX: "auto",
              scrollBehavior: "smooth",
              gap: 2,
              width: "100%",
              paddingBottom: "16px",
              "::-webkit-scrollbar": { display: "none" },
            }}
          >
            {challenges.map((challenge, index) => (
              <Card
                key={index}
                sx={{
                  margin: "10px",
                  minWidth: "320px",
                  height: "280px",
                  backgroundColor: "var(--bg-card-blue)",
                  padding: "30px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px var(--test)",
                  transition: "0.2s",
                  "&:hover": { transform: "scale(1.03)" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                  // alignContent: "flex-start",
                  cursor: "pointer",
                }}
              >
                <CardContent sx={{ padding: "0" }}>
                  <Typography
                    variant="h5"
                    sx={{ color: "var(--dark-text)", marginBottom: "20px" }}
                  >
                    {challenge.title}
                  </Typography>
                  <Typography variant="body">
                    {challenge.description}
                  </Typography>
                  <Chip
                    label={challenge.category}
                    sx={{
                      fontSize: "1rem",
                      textTransform: "UpperCase",
                      color: "var(--bg-chip)",
                      border: "none",
                      backgroundColor: "transparent",
                      marginTop: "15px",
                    }}
                  />
                </CardContent>
                <Button
                  variant="outlined"
                  sx={{
                    color: "var(--bg-button2)",
                    borderColor: "var(--bg-button)2",
                    "&:hover": {
                      color: "var(--light-text)",
                      backgroundColor: "#297b4e80",
                    },
                    textTransform: "none",
                  }}
                >
                  Aceitar Desafio
                </Button>
              </Card>
            ))}
          </Box>

          <IconButton
            onClick={scrollRight}
            sx={{
              position: "absolute",
              right: "-50px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 3,
              backgroundColor: "#297b4e90",
              "&:hover": { backgroundColor: "var(--bg-button-hover)" },
              color: "var(--light-text)",
              height: "40px",
              width: "40px",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
