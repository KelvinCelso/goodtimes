import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import PublicIcon from "@mui/icons-material/Public";
function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          Good<span>Times</span>
        </LogoContainer>
        <Navbar>
          <a href="#">
            <HomeIcon className="icons" />
            <span>Home</span>
          </a>
          <a href="#">
            <SearchIcon className="icons" />
            <span>Search</span>
          </a>
          <a href="#">
            <StackedLineChartIcon className="icons" />
            <span>Rankings</span>
          </a>
          <a href="#">
            <PublicIcon className="icons" />
            <span>Publicidade</span>
          </a>
        </Navbar>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  color: black;
  top: 0;
  display: flex;
  align-items: center;
  background-color: #0396a6;
  color: white;
  box-shadow: -1px 11px 14px 0px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: -1px 11px 14px 0px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: -1px 11px 14px 0px rgba(0, 0, 0, 0.31);
`;
const Content = styled.div`
  display: flex;
  margin: 10px;
  margin-left: 20px;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  height: 40px;
`;

const Navbar = styled.nav`
  margin: 20px;
  margin-left: 20px;
  display: flex;
  a {
    text-decoration: none;
    padding: 10px 25px;
    justify-content: center;
    justify-items: center;
    margin-right: 5px;
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
        display: inherit;
        transition: 1s ease-in-out;
      }
    }
    .icons {
      width: 20px;
      color: white;
      margin-right: 10px;
      display: none;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
const LogoContainer = styled.div`
  cursor: pointer;
  font-size: 1.8em;
  font-weight: bold;
  span {
    cursor: pointer;
  }
`;
export default Header;
