import { useState } from "react";
import styled from "styled-components";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <Content>
        <LogoContainer>
          <span>GoodTimes</span>
        </LogoContainer>
        <InputContainer>
          <form>
            <h5>E-mail</h5>
            <input type={"text"} value={email} />
            <h5>Password</h5>
            <input
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
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
  margin-top: 50px;
  margin-bottom: 20px;
  span {
    font-weight: 500;
    font-size: 2.3em;
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: 80%;
    height: 60px;
    margin-left: 40px;
    margin-bottom: 20px;
  }
`;

export default Login;
