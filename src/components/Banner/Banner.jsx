import React from "react";
import { Button, Typography } from "@mui/material";

export function Banner() {
  return (
    <div id="home"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(8, 22, 21, 0.1), rgba(9, 22,21, 1 )), url(/assets/images/banner.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div>
        <Typography
          variant="h1"
          style={{ fontSize: "4.2rem", fontWeight: "900", letterSpacing: "2px"}}
        >
          Planeta Consciente
        </Typography>
        <Typography variant="h5" style={{ marginBottom: "48px" }}>
          Construindo um Mundo de Energia Limpa Juntos!
        </Typography>
        <Button
          variant="contained"
          size="large"
          style={{ fontWeight: "bold", backgroundColor: "var(--bg-button)" }}
        >
          Junte-se agora
        </Button>
      </div>
    </div>
  );
}
