import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Grid,
  MenuItem, FormControl, InputLabel, Select 

} from "@mui/material";
import { api } from "../../services/api";
import { Title } from "../../common-components/Title";
import { styled } from "@mui/system";

export function ImpactCalculator() {
  const [consumption, setConsumption] = useState("");
  const [frequency, setFrequency] = useState("");
  const [renewables, setRenewables] = useState("");
  const [gas, setGas] = useState("");
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    setRenewables(event.target.value);
  };

  const handleCalculate = async () => {
    const calculatedImpact = await calculateImpact(
      consumption,
      frequency,
      renewables,
      gas
    );
    setResult(calculatedImpact);
  };
const calculateImpact = async (
  consumption,
  frequency,
  renewables,
  gas,
  fuelType = "fóssil"
) => {
  const eletricity_response = await api.post("/estimates", {
    type: "electricity",
    electricity_unit: "kwh",
    electricity_value: parseFloat(consumption),
    country: "pt",
  });

  const eletricityComsuption =
    eletricity_response.data.data.attributes.carbon_kg;

  const fuel_response = await api.post("/estimates", {
    type: "fuel_combustion",
    fuel_source_type: "pg",
    fuel_source_unit: "gallon",
    fuel_source_value: parseFloat(gas),
  });

  const fuelComsuption = fuel_response.data.data.attributes.carbon_kg;

  // Impacto negativo (total de CO₂ consumido)
  const totalImpactNegativo = eletricityComsuption + fuelComsuption;

  // Calculo da economia com redução de 10% no consumo
  const co2Saved = totalImpactNegativo * 0.1; // 10% de redução
  const treesPlantedAfterSaving = co2Saved / 0.02;

  // Calcular o número de árvores que seriam "derrubadas" pelo impacto total
  const treesDowned = totalImpactNegativo / 0.02;

  return {
    totalImpactNegativo: totalImpactNegativo.toFixed(2), // Impacto negativo total
    treesDowned: Math.round(treesDowned), // Árvores derrubadas pelo impacto total
    co2Saved: co2Saved.toFixed(2), // Economia de CO₂ com 10% a menos
    treesPlantedAfterSaving: Math.round(treesPlantedAfterSaving), // Árvores que você pode plantar com a economia
  };
};


  return (
    <Container id="calculator" className="calculator">
      <Title sectionName="Calculadora de Impacto Individual" />
      <Paper
        style={{
          padding: "20px 20px",
          marginBottom: "40px",
          backgroundColor: "var(--calculator)",
          color: "var(--light-text)",
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ marginBottom: "20px" }}>
          Entenda como suas escolhas atuais impactam o meio ambiente e descubra
          formas de reduzir seu impacto negativo!
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              className="textField"
              label="Consumo mensal de eletricidade (kWh)"
              variant="filled"
              fullWidth
              value={consumption}
              onChange={(e) => setConsumption(e.target.value)}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className="textField"
              label="Frequência de uso de eletrodomésticos por dia"
              variant="filled"
              fullWidth
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="filled" fullWidth className="selectForm">
              <InputLabel id="renewables-label">
                Já utiliza fontes de energia renovável?
              </InputLabel>
              <Select
                labelId="renewables-label"
                id="renewables-select renewSelect"
                value={renewables}
                onChange={handleChange}
                type="string"
              >
                <MenuItem value="sim">Sim</MenuItem>
                <MenuItem value="nao">Não</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              className="textField"
              label="Já utiliza fontes de energia renovável?"
              variant="filled"
              fullWidth
              value={renewables}
              onChange={(e) => setRenewables(e.target.value)}
            />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <TextField
              className="textField"
              label="Qual seu consumo mensal de gás de cozinha? (em galões)"
              variant="filled"
              fullWidth
              value={gas}
              onChange={(e) => setGas(e.target.value)}
              type="number"
            />
          </Grid>
        </Grid>

        <Box textAlign="center" marginTop="40px">
          <Button
            variant="contained"
            style={{
              backgroundColor: "var(--bg-button2)",
              padding: "8px 20px",
            }}
            onClick={handleCalculate}
          >
            Calcular Impacto
          </Button>
        </Box>
      </Paper>

      {result && (
        <Paper
          style={{
            padding: "20px",
            backgroundColor: "var(--test)",
            color: "var(--light-text)",
          }}
        >
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Resultado do Impacto Ambiental
          </Typography>
          <Box textAlign="center" marginBottom="20px">
            {/* Impacto Negativo */}
            <Typography variant="h6" marginTop="20px">
              Seu consumo de energia gera {result.totalImpactNegativo} kg de CO₂
              por ano, o que equivale a derrubar {result.treesDowned} árvores.
            </Typography>
            <Typography variant="body" style={{ marginBotton: "50px" }}>
              Adote fontes renováveis para reduzir esse impacto!
            </Typography>
          </Box>
          <Box textAlign="center" marginTop="30px">
            {/* Sugestão Positiva */}
            <Typography variant="body" style={{ color: "#a9a785" }}>
              Ao reduzir 10% do consumo ou adotar fontes renováveis, você pode
              economizar até {result.co2Saved} kg de CO₂ e compensar parte desse
              impacto.
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#a9a785" }}
            >
              Isso equivale a salvar {result.treesPlantedAfterSaving} árvores!
            </Typography>
          </Box>
        </Paper>
      )}
    </Container>
  );
}
