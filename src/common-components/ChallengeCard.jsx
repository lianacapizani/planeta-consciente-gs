import React from "react";
import { Card, CardContent, Typography, Chip, Button } from "@mui/material";

export function ChallengeCard({ challenge }) {
  return (
    <Card
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
        <Typography variant="body1">{challenge.description}</Typography>
        <Chip
          label={challenge.category}
          sx={{
            fontSize: "1rem",
            textTransform: "uppercase",
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
          borderColor: "var(--bg-button2)",
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
  );
}
