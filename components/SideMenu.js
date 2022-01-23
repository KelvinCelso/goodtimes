import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import MenuIcon from "@mui/icons-material/Menu";
import PublicIcon from "@mui/icons-material/Public";
import styled, { css } from "styled-components";

function SideMenu(props) {
  return (
    <Container>
      <Content>
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
        </Navbar>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  margin-bottom: 20px;
  margin-top: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;

  background-color: #0396a6;
  transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  ${(props) => {
    css`
      opacity: ${props.opacity};
    `;
  }}
  @media (min-width: 768px) {
    display: none;
  }
`;
const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  a {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    text-decoration: none;
    color: white;
    .icons {
      margin-right: 15px;
    }
  }
`;
const Content = styled.div`
  padding-top: 20px;

  margin-bottom: 10px;
`;
export default SideMenu;
