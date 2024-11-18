import React from "react";
import { Container, Typography } from "@mui/material";
import { InspirationalCard } from "../InspirationalCard/InspirationalCard";
import { Carousel } from "react-responsive-carousel";
import { Title } from "../../common-components/Title";
export function CarouselStories() {
  return (
    <Container style={{ marginTop: "100px" }}>
      <Title sectionName="Histórias Inspiradoras" />
      <Carousel>
        <div>
          <InspirationalCard
            title="Energia Eólica no Nordeste do Brasil"
            image="/assets/images/eolica-nordeste.jpg"
            description="A energia eólica tem mudado o panorama energético do nordeste brasileiro, que agora é uma das principais regiões produtoras do país. Turbinas eólicas estão gerando eletricidade para milhões de brasileiros e ajudando a reduzir a pegada de carbono do país, além de gerar empregos locais."
          />
        </div>
        <div>
          <InspirationalCard
            title="Fazendas Solares na Califórnia"
            image="/assets/images/solares-california.jpg"
            description="Fazendas solares na Califórnia estão fornecendo energia limpa para milhares de residências, ajudando a reduzir a dependência de combustíveis fósseis. Além disso, esses projetos criaram milhares de empregos verdes, beneficiando tanto a economia quanto o meio ambiente. A Califórnia lidera os Estados Unidos em termos de geração de energia solar, sendo um modelo para outras regiões do mundo."
          />
        </div>
        <div>
          <InspirationalCard
            title="Transformação Urbana em Copenhague"
            image="/assets/images/transformacao-copenhague.jpg"
            description="Copenhague, a capital da Dinamarca, se tornou um exemplo global de cidade sustentável. A cidade planeja ser neutra em carbono até 2025, com iniciativas de transporte sustentável, infraestrutura verde e energias renováveis. Esse exemplo urbano está inspirando outras cidades ao redor do mundo a adotarem práticas semelhantes e mais sustentáveis."
          />
        </div>
        <div>
          <InspirationalCard
            title="Comunidade Solar no Sertão do Brasil"
            image="/assets/images/comunidade-solar-sertao.jpeg"
            description="Em uma comunidade isolada no sertão nordestino, um projeto de energia solar levou eletricidade a centenas de famílias, garantindo acesso a energia limpa e confiável. Com isso, escolas, clínicas e pequenos negócios prosperaram, enquanto as emissões de carbono na região foram significativamente reduzidas, melhorando a qualidade de vida local."
          />
        </div>
      </Carousel>
    </Container>
  );}
