import React from "react";
import { Box, Typography, Link, Divider } from "@mui/material";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "var(--test)",
        padding: "20px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        color:"var(--light-text)", 
      }}
    >
      <Typography variant="body2" sx={{ marginBottom: "10px" }}>
        &copy; 2024 Planet Conscious. Todos os direitos reservados.
      </Typography>

      <Divider sx={{ width: "80%", marginBottom: "10px" }} />

      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link href="#" color="inherit" variant="body2">
          Sobre nós
        </Link>
        <Link href="#" color="inherit" variant="body2">
          Termos de Uso
        </Link>
        <Link href="#" color="inherit" variant="body2">
          Política de Privacidade
        </Link>
        <Link href="#" color="inherit" variant="body2">
          Contato
        </Link>
      </Box>
    </Box>
  );
}
