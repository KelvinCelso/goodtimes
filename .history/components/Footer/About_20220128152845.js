import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function About() {
  return (
    <Container>
      <Content>
        <Wrap>
          <Brand>
            <h1>Goodtimes</h1>
            <p>
              Se nao tens nada a fazer entre no site <span>GoodTimes</span> para
              ter goodtimes
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
            <a href="#">
              <FacebookIcon className="icons" />
            </a>
            <a href="#">
              <InstagramIcon className="icons" />
            </a>
            <a href="#">
              <WhatsAppIcon className="icons" />
            </a>
            <a href="#">
              <TwitterIcon className="icons" />
            </a>
          </Sobre>
        </Wrap>
        <Wrap>
          <Legal>
            <h2>Legal</h2>
            <ul>
              <li>
                <a href="#">Terms </a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </Legal>
        </Wrap>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 20px;
  margin-left: 5vw;

  a {
    text-decoration: none;
    color: rgb(219, 219, 219);
  }
`;
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Wrap = styled.div`
  flex-direction: column;
  width: 200px;
  p,
  a {
    font-size: 13px;
    color: rgb(163, 163, 163);
  }
  a {
    transition: all 0.3s ease;
    &:hover {
      color: #fff;
    }
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      margin-bottom: 5px;
    }
  }
`;
const Brand = styled.div`
  p {
    font-weight: normal;
    line-height: 20px;
  }
`;
const Explore = styled.div``;
const Sobre = styled.div`
  display: block;
  .icons {
    color: rgb(163, 163, 163);
    margin-right: 10px;
    transition: all 0.3s ease;
    &:hover {
      color: #fff;
    }
  }
`;
const Legal = styled.div``;

export default About;
