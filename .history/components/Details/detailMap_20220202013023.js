import styled from "styled-components";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  LoadScript,
} from "@react-google-maps/api";
import { map } from "lodash";
import { useState } from "react";
function DetailMap(props) {
  const [map, setMap] = useState();
  const onMapLoad = (map) => {
    map: google.maps.Map, setMap(map);
  };
  useEffect(() => {}, [props.location]);

  return (
    <Container>
      <LoadScript
        id="script-loader"
        googleMapsApiKey={REACT_APP_GOOGLE_API_KEY}
      >
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{
            lat: -25.84190642075656,
            lng: 32.50452432146974,
          }}
          zoom={10}
        >
          <Marker></Marker>
        </GoogleMap>
      </LoadScript>
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
