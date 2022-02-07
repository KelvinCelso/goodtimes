import styled from "styled-components";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
function detailMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAhgjtdN0Y9CD2Wf83x62E6Cei69wLZczw",
  });
  return <Container></Container>;
}
const Container = styled.div`
  display: block;
  width: 150vw;
  height: 100px;
`;

export default detailMap;
