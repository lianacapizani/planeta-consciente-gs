import React from "react";
import { Typography } from "@mui/material";

export function ChallengesTitle() {
  return (
    <Typography
      variant="body1"
      align="center"
      sx={{
        fontSize: "1.2rem",
        color: "var(--light-text)",
        marginBottom: "40px",
      }}
    >
      Transforme a sustentabilidade em um jogo e ganhe recompensas exclusivas
      enquanto ajuda a cuidar do planeta.
    </Typography>
  );
}
