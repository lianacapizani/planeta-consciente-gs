import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
} from "@mui/material";

export function Challenges() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage:
          "linear-gradient(to bottom, rgba(8, 22, 21, 1) 0% ,rgba(200, 220, 221, 0.1) 50%, rgba(9, 22,21, 1 )), url(/assets/images/challenges2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "var(--light-text)",
        padding: "80px 20px 100px 20px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {/* Overlay para melhor legibilidade */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(9, 22, 21, 0.7)", // Cor do overlay para contraste
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Título */}
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: 700,
            fontSize: "2.5rem",
            color: "var(--title)",
            marginBottom: "20px",
          }}
        >
          Desafios do Planeta Positivo
        </Typography>

        {/* Subtítulo */}
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

        <Grid container spacing={4}>
          {/* Desafio 1 */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: "var(--bg-card-blue)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px var(--test)",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ color: "var(--dark-text)", marginBottom: "15px" }}
                >
                  Desafio de Economia de Energia
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: "20px" }}>
                  Comprometa-se a reduzir seu consumo de energia em{" "}
                  <strong>X%</strong> durante um mês.
                </Typography>
                <Chip
                  label="🌱 Sustentabilidade"
                  sx={{
                    backgroundColor: "var(--bg-chip)",
                    color: "var(--light-text)",
                    letterSpacing: "1px",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Desafio 2 */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: "var(--bg-card-blue)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px var(--test)",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ color: "var(--dark-text)", marginBottom: "15px" }}
                >
                  Desafio de Mobilidade Sustentável
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: "20px" }}>
                  Troque o uso do carro por transporte público ou bicicleta ao
                  menos uma vez na semana.
                </Typography>
                <Chip
                  label="🚴 Mobilidade"
                  sx={{
                    backgroundColor: "var(--bg-chip)",
                    color: "var(--light-text)",
                    letterSpacing: "1px",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>

          {/* Desafio 3 */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundColor: "var(--bg-card-blue)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px var(--test)",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{ color: "var(--dark-text)", marginBottom: "15px" }}
                >
                  Desafio Verde para Empresas
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: "20px" }}>
                  Desafie empresas a instalar um sistema de energia solar ou
                  criar um plano de eficiência energética.
                </Typography>
                <Chip
                  label="🏢 Empresas"
                  sx={{
                    backgroundColor: "var(--bg-chip)",
                    color: "var(--light-text)",
                    letterSpacing: "1px",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Sistema de Pontuação */}
        <Box sx={{ textAlign: "center", marginTop: "40px" }}>
          <Typography
            variant="h4"
            sx={{
              color: "var(--title)",
              fontWeight: 700,
              marginBottom: "20px",
            }}
          >
            Sistema de Pontuação e Recompensas
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: "30px", color: "var(--light-text)" }}
          >
            Complete desafios para ganhar pontos e troque por recompensas, como
            certificados e selos digitais!
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "var(--bg-button)",
              color: "var(--light-text)",
              fontSize: "15px",
              padding: "8px 20px",
              textTransform: "uppercase",
              "&:hover": { backgroundColor: "var(--bg-button2)" },
            }}
          >
            Comece Agora
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
