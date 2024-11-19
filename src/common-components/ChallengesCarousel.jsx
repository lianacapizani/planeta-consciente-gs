import React, { useRef } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ChallengeCard } from "./ChallengeCard";

export function ChallengesCarousel({ challenges }) {
  const scrollContainer = useRef();

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        marginTop: "20px",
      }}
    >
      <IconButton
        onClick={scrollLeft}
        sx={{
          position: "absolute",
          left: "-50px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          backgroundColor: "#297b4e90",
          "&:hover": { backgroundColor: "var(--bg-button-hover)" },
          color: "var(--light-text)",
          height: "40px",
          width: "40px",
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <Box
        ref={scrollContainer}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: 2,
          width: "100%",
          paddingBottom: "16px",
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} challenge={challenge} />
        ))}
      </Box>

      <IconButton
        onClick={scrollRight}
        sx={{
          position: "absolute",
          right: "-50px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          backgroundColor: "#297b4e90",
          "&:hover": { backgroundColor: "var(--bg-button-hover)" },
          color: "var(--light-text)",
          height: "40px",
          width: "40px",
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}
