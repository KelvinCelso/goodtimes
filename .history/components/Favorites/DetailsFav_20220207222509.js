import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { favoriteState } from "../../atoms/ItemsAtoms";
import DetailMap from "../Details/detailMap";

function Details(props) {
  return (
    <Container>
      <Content>
        <img src={props.image} alt="Favoto" />
        <div className="map">
          <DetailMap location={props.location} name={props.name} />
        </div>
        <div className="title">
          <h1>{props.name}</h1>
          <div className="separator"></div>
        </div>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  background-color: #fff;
  color: #000;
  width: 600px;
  height: 800px;
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  align-items: center;
  position: relative;
  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 300px;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    mask-image: linear-gradient(rgba(0, 0, 0, 50) 50%, transparent);
  }
  .map {
    top: 200px;
    right: 50px;
    width: 250px;
    height: 230px;
    position: absolute;
    border-radius: 4px;
  }
  .title {
    top: 200px;
    left: 50px;
    width: 280px;
    height: 200px;
    position: absolute;
    border-radius: 4px;
    color: #000;
    h1 {
      margin: 0px;
      padding: 0px;
      text-transform: uppercase;
    }
    .separator {
      display: block;
      width: 100px;
      height: 2px;
      background-color: #e03d4e;
      margin: 5px 0;
    }
  }
`;

export default Details;
