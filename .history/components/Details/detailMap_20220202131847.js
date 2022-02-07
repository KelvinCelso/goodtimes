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
  const [map, setMap] = useState(google.maps.Map);
  const onMapLoad = (map) => {
    map: google.maps.Map, setMap(map);
  };
  const onLoadA = (ref) => {
    ref: google.maps.places.SearchBox;
    setSearchBoxA(ref);
  };
  const onPlacesChangedA = () => {
    const places = searchBoxA.getPlaces();
    console.log(places);
    const place = places[0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    setPointA(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    map?.panTo(location);
  };
  return (
    <Container>
      <LoadScript
        id="script-loader"
        googleMapsApiKey={REACT_APP_GOOGLE_API_KEY}
        libraries={["places"]}
      >
        <StandaloneSearchBox
          onLoad={onLoadA}
          onPlacesChanged={onPlacesChangedA}
        >
          <input
            className="addressField"
            placeholder="Digite o endereço inicial"
          />
        </StandaloneSearchBox>
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{
            lat: -25.84190642075656,
            lng: 32.50452432146974,
          }}
          zoom={15}
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
