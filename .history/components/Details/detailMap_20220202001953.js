import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
function detailMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY",
  });
  return (
    <Container>
      <Content></Content>
    </Container>
  );
}
const Container = styled.div``;
const Content = styled.div``;
export default detailMap;
