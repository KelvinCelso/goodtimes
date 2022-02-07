import styled from "styled-components";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
function detailMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAhgjtdN0Y9CD2Wf83x62E6Cei69wLZczw",
  });
  return (
    <Container>
      <Content>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={{
              lat: -25.84190642075656,
              lng: 32.50452432146974,
            }}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        ) : (
          <></>
        )}
      </Content>
    </Container>
  );
}
const Container = styled.div``;
const Content = styled.div``;
export default detailMap;
