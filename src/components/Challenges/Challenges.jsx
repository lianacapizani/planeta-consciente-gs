import React from "react";
import { Box, Container } from "@mui/material";
import { Title } from "../../common-components/Title";
import { ChallengesTitle } from "../../common-components/ChallengesTitle";
import { ChallengesCarousel } from "../../common-components/ChallengesCarousel";

export function Challenges() {
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
        <ChallengesTitle />
        <ChallengesCarousel challenges={challenges} />
      </Container>
    </Box>
  );
}
