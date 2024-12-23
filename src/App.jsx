import React from "react";
import { MenuBar } from "./components/MenuBar/MenuBar";
import { Banner } from "./components/Banner/Banner";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { CarouselStories } from "./components/CarouselStories/CarouselStories";
import { ImpactCalculator } from "./components/ImpactCalculator/impactCalculator";
import { Challenges } from "./components/Challenges/Challenges";
import { Ambassadors } from "./components/Ambassadors/Ambassadors";
import { Guide } from "./components/Guide/Guide";
import { Footer } from "./components/Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '"Quicksand", sans-serif',
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MenuBar />
        <Banner />
        <AboutSection />
        <CarouselStories />
        <ImpactCalculator />
        <Challenges />
        <Ambassadors />
        <Guide />
        <Footer />
      </ThemeProvider>
    </>
  );
}
