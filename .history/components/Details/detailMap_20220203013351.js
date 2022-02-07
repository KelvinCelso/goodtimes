import styled from "styled-components";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  LoadScript,
} from "@react-google-maps/api";
import { map } from "lodash";
import { useEffect, useState } from "react";
import { REACT_APP_GOOGLE_API_KEY } from "../../pages/details/[id]";
import { positions } from "@mui/system";
function DetailMap(props) {
  let position = {};
  useEffect(() => {
    position = {};
  }, [props.location]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAhgjtdN0Y9CD2Wf83x62E6Cei69wLZczw",
  });

  return (
    <Container>
      <h1>xitombo</h1>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  height: 300px;
  justify-content: center;
  color: black;
  h1 {
  }
`;

export default DetailMap;
