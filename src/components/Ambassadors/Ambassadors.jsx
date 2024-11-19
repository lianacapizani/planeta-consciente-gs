import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Divider,
} from "@mui/material";
import { Title } from "../../common-components/Title";

export function Ambassadors() {

  return (
    <Container
      id="join"
      sx={{
        backgroundColor: "var(--bg-maxCard)",
        padding: "40px 0",
        borderRadius: "8px",
        maxWidth: "90%",
      }}
    >
      <Title sectionName="Programa de Embaixadores do Verde" />
      {/* Subtítulo da Seção */}
      <Typography
        variant="body1"
        align="center"
        sx={{ fontSize: "1.4rem", marginBottom: "40px", padding: "0 30px" }}
      >
        Junte-se a nós na missão de promover a sustentabilidade e inspire outros
        a adotarem práticas verdes em seu dia a dia.
      </Typography>

      {/* Grid de Cards */}
      <Grid container spacing={4} justifyContent="center">
        {/* Card de Benefícios */}
        <Grid item xs={12} md={5}>
          <Paper
            sx={{
              padding: "30px",
              textAlign: "center",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              backgroundColor: "#fff",
              color: "var(--dark-text)",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
                transition: "0.3s",
              },
            }}
          >
            <Typography variant="h5" gutterBottom>
              Benefícios Exclusivos
            </Typography>
            <Divider sx={{ margin: "20px 0", borderColor: "#e1e1e1" }} />
            <Typography
              variant="body1"
              sx={{ fontSize: "1rem", margin: "10px 0" }}
            >
              🌿 Destaque de suas postagens no nosso site.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                margin: "10px 0",
              }}
            >
              🌱 Participação em eventos e webinars sobre sustentabilidade.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                margin: "10px 0",
              }}
            >
              🏅 Certificados de reconhecimento e uma área especial de
              Embaixadores.
            </Typography>
          </Paper>
        </Grid>

        {/* Card de Como Participar */}
        <Grid item xs={12} md={5}>
          <Paper
            sx={{
              padding: "30px",
              textAlign: "center",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              backgroundColor: "#fff",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
                transition: "0.3s",
              },
            }}
          >
            <Typography variant="h5" gutterBottom>
              Como Participar
            </Typography>
            <Divider sx={{ margin: "20px 0", borderColor: "#e1e1e1" }} />
            <Typography
              variant="body1"
              align="center"
              paragraph
              sx={{ fontSize: "1rem" }}
            >
              Torne-se um Embaixador do Verde e tenha acesso a conteúdos
              exclusivos, como guias, artigos e eventos ao vivo, enquanto
              compartilha a causa da sustentabilidade com seus amigos e
              seguidores.
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: "var(--bg-button2)",
                fontSize: "15px",
                padding: "8px 20px",
              }}
              //   onClick= {handleForm}
            >
              Inscreva-se Agora
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}