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
import { positions } from "@mui/system";
function DetailMap(props) {
  useEffect(() => {
    const position = {
      lat: Number(props.location?.[0]),
      lng: Number(props.location?.[0]),
    };
  }, [props.location]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAhgjtdN0Y9CD2Wf83x62E6Cei69wLZczw",
  });

  return (
    <Container>
      {isLoaded ? (
        <GoogleMap center={position} zoom={10}>
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
