import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { Title } from "../../common-components/Title";

export function Guide() {
  return (
    <Box
    id="guides"
      sx={{
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Title sectionName="Guia Verde para Empresas e Comunidades"/>
        <Typography
          variant="body1"
          style={{
            color: "var(--light-text",
            marginBottom: "30px",
            lineHeight: 1.8,
            fontSize: "18px",
          }}
        >
          Oferecemos um recurso prático e valioso para empresas e comunidades
          interessadas em aplicar práticas sustentáveis de energia. Nosso guia
          inclui:
        </Typography>
        <Typography
          component="ul"
          style={{
            textAlign: "left",
            margin: "0 auto",
            color: "var(--light-text)",
            fontSize: "18px",
            maxWidth: "600px",
            lineHeight: 1.8,

          }}
        >
          <li>Como iniciar com energia solar</li>
          <li>Estratégias de economia energética para pequenas empresas</li>
          <li>Planejamento sustentável para comunidades</li>
        </Typography>
        <Typography
          style={{
            color: "var(--light-text)",
            marginTop: "30px",
            marginBottom: "30px",
            fontSize: "18px",
          }}
        >
          Baixe nosso Guia Verde para Empresas e Comunidades e dê o primeiro
          passo para um futuro sustentável.
        </Typography>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          sx={{
              padding: "8px 20px",
              fontWeight: "500",
              textTransform: "none",
              backgroundColor:"var(--bg-button)",
          }}
        >
          Baixar Guia Verde
        </Button>
      </Container>
    </Box>
  );
};
