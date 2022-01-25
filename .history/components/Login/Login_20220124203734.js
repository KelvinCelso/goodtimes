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
`;
const Content = styled.div`
  width: 500px;
  height: 800px;
  display: flex;
  border: 10px solid black;
`;
export default Login;
