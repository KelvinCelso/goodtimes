import React from "react";
import styled from "styled-components";
import DetailMap from "../Details/detailMap";

function Details(props) {
  return (
    <Container>
      <Content>
        <img
          src="https://lh3.googleusercontent.com/DLEjpo2RyGoURtP2Ji5g_rfydqPs7oLZf_tCyKLWWDmIgSv38_dKDNB6ti3dwDmfAyZ01BOM=w1080-h608-p-no-v0"
          alt="Favoto"
        />
        <div className="map">
          <DetailMap location={props.location} name={props.name} />
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
    top: 100px;
    width: 100px;
    height: 50px;
    position: absolute;
  }
`;

export default Details;
