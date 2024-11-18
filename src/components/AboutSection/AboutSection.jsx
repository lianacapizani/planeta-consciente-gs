import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Title } from "../../common-components/Title";



export function AboutSection() {
  return (
    <Box
      id="about"
      sx={{
        padding: "40px 0",
      }}
    >
      <Container maxWidth="lg" style={{ marginTop: "40px" }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/assets/images/arvore-mao-susten.png"
              alt="Imagem de uma mao segurando um planeta relacionado a sustentabilidade"
              sx={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "80px 80px 200px 0px",
                display: "block",
                transform: "rotateY(180deg)",
                margin: { xs: "0 auto", md: "0" },
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{ maxWidth: "90%" }}>
            <Title sectionName="Sobre"/>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "20px",
                color: "var(--light-text)",
                lineHeight: 1.8,
                letterSpacing: "0.5px",
              }}
            >
              A <strong>Planeta Consciente</strong> é uma iniciativa dedicada a
              promover a consciência ambiental e inspirar ações concretas para
              um futuro sustentável. Nossa missão é engajar indivíduos, empresas
              e comunidades em práticas que preservem os recursos naturais,
              incentivem o uso de energia limpa e reduzam o impacto ambiental.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "var(--light-text)",
                lineHeight: 1.8,
                letterSpacing: "0.5px",
              }}
            >
              Por meio de desafios interativos, histórias inspiradoras e
              conteúdos educativos, a Planeta Consciente transforma a
              sustentabilidade em uma jornada acessível e recompensadora.
              Junte-se a nós para construir um mundo onde pequenas ações geram
              grandes mudanças, e cada escolha contribui para um planeta mais
              saudável e equilibrado.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                marginTop: "20px",
                fontWeight: "bold",
                color: "var(--destak)",
              }}
            >
              Vamos juntos transformar consciência em ação!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
