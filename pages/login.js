import styled from "styled-components";
function login() {
  return (
    <Container>
      <Content>
        <img src="/images/white_logo_transparent_background.png"/>
        <p>
          Bem vindos a Maputo, este website desenvolvido por estudantes mostra
          locais e estabelecimento que podem tornar os seus dias melhores na
          belissima capital de Moçambique, Maputo.
        </p>
        <button>Clique para se Registar</button>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  position: relative;
  z-index: -1;
  display: flex;
  object-fit: contain;
  align-items: center;
  background-color: #A69F97;
  color: white;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;
  p {
    display: block;
    width: 50vw;
    line-height: 1.5;
    letter-spacing: 1.5px;
    font-weight: bold;
  }
  span {
    justify-content: center;
  }
  button {
    background-color: #f2594b;
    height: 60px;
    width: 30vw;
    border-radius: 10px;
    border: none;
    color: white;
    font-weight: bold;
  }
  img{
      width: 200px;
  }
`;

export default login;
