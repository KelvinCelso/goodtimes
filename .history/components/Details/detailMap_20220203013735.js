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
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAhgjtdN0Y9CD2Wf83x62E6Cei69wLZczw",
  });

  return (
    <Container>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: `100%`, height: `100%` }}
          center={{
            lat: Number(props.location?.[0]),
            lng: Number(props.location?.[1]),
          }}
          zoom={15}
        >
          <Marker
            position={{
              lat: Number(props.location?.[0]),
              lng: Number(props.location?.[1]),
            }}
            options={{
              label: {
                text: props.name,
                className: "marker",
              },
            }}
          ></Marker>
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
  .marker {
    margin-bottom: 60px;
    background-color: white;
    font-weight: bold;
    border: 1px solid black;
    padding: 10px;
  }
`;

export default DetailMap;
