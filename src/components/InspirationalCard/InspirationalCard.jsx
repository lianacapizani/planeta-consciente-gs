import React from "react";
import { Card, CardContent, Typography, Link } from "@mui/material";

export function InspirationalCard({ title, image, description, link }) {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        maxWidth: "none",
        height: "340px",
        borderRadius: "4px",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "50%", height: "auto", objectFit: "cover" }}
      />
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "30px",
          backgroundColor: "var(--bg-card-blue)",
          textAlign: "left",
          height: "340px",
        }}
      >
        <Typography
          variant="h6"
          style={{ marginBottom: "20px", fontWeight: "500", fontSize: "20px" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          style={{ color: "var(--dark-text)", fontSize: "16px" }}
          component="p"
        >
          {description}
        </Typography>
        <Link
          href={link}
          style={{
            marginTop: "20px",
            textDecoration: "none",
            fontSize: "16px",
            color: "var(--link-color)",
            fontWeight: "bold",
          }}
        >
          Ver Mais
        </Link>
      </CardContent>
    </Card>
  );
}
