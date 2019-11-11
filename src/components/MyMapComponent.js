import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAYGe5aS07NFhhITkwac8OQKazamMW3SNU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: 38.5223955, lng: -98.6003791 }}
  >
    {props.markers.map(marker => {
      return (
        <Marker
          icon={marker.icon}
          key={marker.name}
          position={{ lat: marker.lat, lng: marker.lng }}
        />
      );
    })}
  </GoogleMap>
));

export default MyMapComponent;
