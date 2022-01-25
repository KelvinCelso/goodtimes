import styled from "styled-components";
function Login() {
  return (
    <Container>
      <Content></Content>
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
`;
const Content = styled.div`
  width: 500px;
  height: 700px;
  display: flex;
  border: 2px solid black;
  margin: auto;
  margin-top: 20px;
`;
export default Login;
