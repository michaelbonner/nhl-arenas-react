import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import mapStyles from "../data/map-styles";

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: (
      <div
        style={{
          height: `100%`,
        }}
      />
    ),
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: 38.5223955, lng: -98.6003791 }}
    defaultOptions={{ styles: mapStyles, disableDefaultUI: true }}
  >
    {props.markers.map((marker) => {
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

export default Map;
