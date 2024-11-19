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
    const co2Saved = fuelComsuption + eletricityComsuption;
    const treesPlanted = co2Saved / 0.02; 

    return {
      co2Saved: co2Saved.toFixed(2),
      treesPlanted: Math.round(treesPlanted),
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
          Descubra o impacto positivo das suas escolhas sustentáveis!
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
                id="renewables-select"
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
          <Typography variant="h5" align="center" gutterBottom>
            Resultado do Impacto Ambiental
          </Typography>
          <Box textAlign="center">
            <Typography variant="h6">
              Suas mudanças podem reduzir até {result.co2Saved} kg de CO₂ por
              ano!
            </Typography>
            <Typography variant="body1" style={{ marginTop: "20px" }}>
              Isso é equivalente a plantar {result.treesPlanted} árvores.
            </Typography>
          </Box>
        </Paper>
      )}
    </Container>
  );
}
