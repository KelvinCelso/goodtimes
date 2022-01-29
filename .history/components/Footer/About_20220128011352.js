import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <Content>
        <Brand>
          <h1>Goodtimes</h1>
          <p>
            Se nao tens nada a fazer entre <span>GoodTimes</span> para ter
            goodtimes
          </p>
        </Brand>
        <Explore>
          <a href="#">Pagina Principal</a>
          <a href="#">Pesquisa</a>
          <a href="#">Ranquing</a>
          <a href="#">Publicidade</a>
          <a href="#">Favoritos</a>
        </Explore>
        <Sobre></Sobre>
        <Legal>Terms Privacy</Legal>
      </Content>
    </Container>
  );
}

const Container = styled.div``;
const Content = styled.div``;
const Brand = styled.div``;
const Explore = styled.div``;
const Sobre = styled.div``;
const Legal = styled.div``;

export default About;
