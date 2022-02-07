import styled from "styled-components";
import DetailsCenter from "../components/Details/DetailsCenter";
import { Provider } from "react-redux";
import store from "../app/store";
function details() {
  return (
    <Container>
      <DetailsCenter />
    </Container>
  );
}

const Container = styled.div``;

export default details;
