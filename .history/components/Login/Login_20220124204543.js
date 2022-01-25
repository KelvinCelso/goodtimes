import styled from "styled-components";
function Login() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <span>GoodTimes</span>
        </LogoContainer>
        <InputContainer>
          <input type={Text} />
        </InputContainer>
      </Content>
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
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  span {
    font-weight: 500;
    font-size: 2.3em;
  }
`;
const InputContainer = styled.div``;

export default Login;
