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
  margin-top: 20px;
  display: block;
  width: 350px;
  height: 300px;
  border-radius: 6px;
  @media (max-width: 950px) {
    width: 350px;
  }
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    width: 600px;
  }
  @media (max-width: 700px) {
    width: 85vw;
  }
`;

export default DetailMap;
