import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
function detailMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAhgjtdN0Y9CD2Wf83x62E6Cei69wLZczw",
  });
  return (
    <Container>
      <Content>{isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>

      )}</Content>
    </Container>
  );
}
const Container = styled.div``;
const Content = styled.div``;
export default detailMap;
