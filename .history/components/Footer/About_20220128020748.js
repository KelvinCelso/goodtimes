import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
      <Content>
        <Wrap>
          <Brand>
            <h1>Goodtimes</h1>
            <p>
              Se nao tens nada a fazer entre <span>GoodTimes</span> para ter
              goodtimes
            </p>
          </Brand>
        </Wrap>
        <Wrap>
          <Explore>
            <h2>Explorar</h2>
            <ul>
              <li>
                <a href="#">Pagina Principal</a>
              </li>
              <li>
                <a href="#">Pesquisa</a>
              </li>
              <li>
                <a href="#">Ranquing</a>
              </li>
              <li>
                <a href="#">Publicidade</a>
              </li>
              <li>
                <a href="#">Favoritos</a>
              </li>
            </ul>
          </Explore>
        </Wrap>
        <Wrap>
          <Sobre>
            <h2>Sobre nos</h2>
          </Sobre>
        </Wrap>
        <Wrap>
          <Legal>
            <h2>Legal</h2>
            <a href="#">Terms </a>
            <a href="#">Privacy</a>
          </Legal>
        </Wrap>
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
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Wrap = styled.div`
  flex-direction: column;
  width: 300px;
`;
const Brand = styled.div``;
const Explore = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;
const Sobre = styled.div``;
const Legal = styled.div``;

export default About;
