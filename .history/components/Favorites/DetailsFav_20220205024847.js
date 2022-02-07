import React from "react";
import styled from "styled-components";
import DetailMap from "../Details/detailMap";

function Details(props) {
  return (
    <Container>
      <Content>
        <DetailMap
          className="map"
          location={props.location}
          name={props.name}
        />
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
  height: 600px;
  display: flex;
  border-radius: 6px;

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 300px;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    mask-image: linear-gradient(rgba(0, 0, 0, 50) 50%, transparent);
    position: relative;
  }
  map {
    position: absolute;
    bottom: 0px;
  }
`;

export default Details;
