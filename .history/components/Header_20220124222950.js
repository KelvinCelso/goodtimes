import styled, { css } from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import MenuIcon from "@mui/icons-material/Menu";
import PublicIcon from "@mui/icons-material/Public";
import SideMenu from "./SideMenu";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
function Header() {
  return (
    <Container>
      <LogoContainer>
        Good<span>Times</span>
      </LogoContainer>
      <Navbar>
        <a href="#">
          <HomeIcon className="icons" />
          <span>Pagina Principal</span>
        </a>
        <a href="#">
          <SearchIcon className="icons" />
          <span>Pesquisar</span>
        </a>
        <a href="#">
          <StackedLineChartIcon className="icons" />
          <span>Ranquing</span>
        </a>
        <a href="#">
          <PublicIcon className="icons" />
          <span>Publicidade</span>
        </a>
        <a href="#">
          <StarIcon className="icons" />
          <span>Favoritos</span>
        </a>
        <a href="#">
          <InfoIcon className="icons" />
          <span>Login</span>
        </a>
      </Navbar>
      <button>Entrar</button>
    </Container>
  );
}
const Container = styled.div`
  color: black;
  top: 0;
  display: flex;
  background-color: none;
  color: white;
  align-items: center;
  background-color: black;
  justify-content: space-between;
  width: 100vw;
  /* box-shadow: -1px 11px 14px 0px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: -1px 11px 14px 0px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: -1px 11px 14px 0px rgba(0, 0, 0, 0.31); */
  letter-spacing: 1px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    justify-content: space-between;
    .icon {
      display: inherit;
    }
  }
`;

const Content = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
  justify-items: space-between;
  letter-spacing: 1px;
  text-transform: uppercase;
  height: 40px;
  .icon {
    width: 40px;
    height: 30px;
    color: white;
    margin-right: 10px;
    opacity: 0;
    &:hover {
      height: 40px;
    }
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    .icon {
      opacity: 1;
    }
  }
`;

const Navbar = styled.nav`
  margin: 20px;
  margin-left: 20px;
  display: flex;
  a {
    text-decoration: none;
    padding: 10px 10px;
    margin-right: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        opacity: 0;
        left: 0px;
        position: absolute;
        right: 0px;
        transform-origin: center center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
      .icons {
        opacity: 1;
        /* transition: 1s cubic-bezier(0.645, 0.045, 0.355, 1); */
      }
    }
    .icons {
      width: 20px;
      color: white;
      margin-right: 10px;
      opacity: 0;
    }

    @media (max-width: 1128px) {
      margin-right: 0px;
    }

    @media (max-width: 1050px) {
      padding: 10px 5px;
      .icons {
        margin-right: 5px;
      }
    }

    @media (max-width: 970px) {
      margin-right: 0px;
      display: none;
      transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;
  font-size: 1.8em;
  font-weight: bold;
  margin-right: 20px;
  span {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const SignIndiv = styled.div``;

const MenuComponent = styled.div``;

export default Header;
