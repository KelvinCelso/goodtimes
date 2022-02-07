import styled from "styled-components";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  LoadScript,
} from "@react-google-maps/api";
import { map } from "lodash";
import { useState } from "react";
import { REACT_APP_GOOGLE_API_KEY } from "../../pages/details/[id]";
function DetailMap(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAhgjtdN0Y9CD2Wf83x62E6Cei69wLZczw",
  });
  return (
    <Container>
      s
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: `100%`, height: `100%` }}
          center={{
            lat: -25.951957,
            lng: 32.578713,
          }}
          zoom={15}
        >
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </Container>
  );
}
const Container = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  height: 300px;
  justify-content: center;
`;

export default DetailMap;
