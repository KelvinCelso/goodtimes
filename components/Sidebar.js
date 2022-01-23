import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import MenuIcon from "@mui/icons-material/Menu";
import PublicIcon from "@mui/icons-material/Public";
import styled from "styled-components";

function Sidebar() {
  return (
    <Container>
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
    </Container>
  );
}
const Container = styled.div``;
const Navbar = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Sidebar;
