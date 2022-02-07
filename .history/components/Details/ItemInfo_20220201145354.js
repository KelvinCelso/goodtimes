import React, { useState } from "react";
import styled from "styled-components";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";

function ItemInfo(props) {
  const [aberto, setAberto] = useState(false);
  const date = new Date();
  const hours = date.getHours();
  useEffect(() => {
    if (props.horario?.[0] <= hours && hours < props.horario?.[1]) {
      setAberto(true);
    } else if (props.horario?.[0] > hours || props.horario?.[1] < hours) {
      setAberto(false);
    }
  }, [props.horario, hours]);

  return (
    <Container>
      <Content>
        <h1>{props.name}</h1>
        <div className="separator"></div>
        <div className="info">
          <HomeIcon />
          <p>
            {props.address &&
              props.address?.map((docs) => (
                <>
                  <span>{docs}</span>
                  <br></br>
                </>
              ))}
          </p>
        </div>
        <div className="info">
          <CallIcon />
          <p>
            {props.contacto &&
              props.contacto?.map((docs) => (
                <>
                  <span>{docs}</span>
                  <br></br>
                </>
              ))}
          </p>
        </div>

        <h2>Descricao</h2>
        <p className="body">
          O Lorem Ipsum é um texto modelo da indústria tipográfica e de
          impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
          estas indústrias desde o ano de 1500
        </p>
        <h2>Horario</h2>
        <p className="body">{props.horario}</p>
        <div className="button">Cardapio</div>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
const Content = styled.div`
  display: flex;
  width: 400px;
  height: 100%;
  padding: 30px;

  background-color: white;
  border-radius: 6px;
  flex-direction: column;
  border: 1px solid white;
  color: black;
  letter-spacing: 1px;
  .info {
    display: flex;
    align-items: flex-start;
  }
  h1 {
    margin: 0px;
    padding: 0px;
    text-transform: uppercase;
  }
  h2 {
    margin-bottom: 0px;
  }
  p {
    text-align: justify;
  }
  .head {
    margin-top: 0px;
  }
  .body {
    margin-top: 10px;
    padding-top: 0px;
  }
  .separator {
    display: block;
    width: 10vw;
    height: 2px;
    background-color: #e03d4e;
    margin: 5px 0;
  }
  .button {
    width: 150px;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    background: #e03d4e;
    padding: 10px 30px;
    border-radius: 6px;
    margin-top: 20px;
    color: white;
    font-weight: 500;
    border: 2px solid #e03d4e;
    transition: all 0.3s ease;
    &:hover {
      color: #e03d4e;
      background: none;
    }
  }
  @media (max-width: 950px) {
    width: 350px;
  }
`;

export default ItemInfo;
