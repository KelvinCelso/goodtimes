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
          <h2>Explorar</h2>
          <a href="#">Pagina Principal</a>
          <a href="#">Pesquisa</a>
          <a href="#">Ranquing</a>
          <a href="#">Publicidade</a>
          <a href="#">Favoritos</a>
        </Explore>
        <Sobre>
          <h2>Sobre nos</h2>
        </Sobre>
        <Legal>
          <h2>Legal</h2>
          <a href="#">Terms </a>
          <a href="#">Privacy</a>
        </Legal>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 20px;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
const Content = styled.div``;
const Brand = styled.div``;
const Explore = styled.div``;
const Sobre = styled.div``;
const Legal = styled.div``;

export default About;
