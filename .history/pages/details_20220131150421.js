import styled from "styled-components";
import DetailsCenter from "../components/Details/DetailsCenter";
import { Provider } from "react-redux";
import store from "../app/store";
function details() {
  return (
    <Provider store={store}>
      <Container>
        <DetailsCenter />
      </Container>
    </Provider>
  );
}

const Container = styled.div``;

export default details;
