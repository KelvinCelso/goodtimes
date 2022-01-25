import styled from "styled-components";
import Login from "../components/Login/Login";

function login() {
  return (
    <Container>
      <Login />
    </Container>
  );
}
const Container = styled.div`
  background-color: white;
`;

export default login;
