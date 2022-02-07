import styled from "styled-components";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
function DetailMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAhgjtdN0Y9CD2Wf83x62E6Cei69wLZczw",
  });
  return (
    <Container>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{
            lat: -25.84190642075656,
            lng: 32.50452432146974,
          }}
          zoom={10}
        ></GoogleMap>
      ) : (
        <></>
      )}
    </Container>
  );
}
const Container = styled.div`
  display: block;
  width: 300px;
  height: 100px;
`;

export default DetailMap;
