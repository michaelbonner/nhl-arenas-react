import React, { ReactNode } from "react";
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
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `90vh`, maxHeight: `800px` }} />,
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
)(({ markers }) => {
  return (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={{ lat: 38.5223955, lng: -98.6003791 }}
      defaultOptions={{ styles: mapStyles, disableDefaultUI: true }}
    >
      {markers &&
        markers.length > 0 &&
        markers.map((marker) => {
          return (
            <Marker
              icon={marker.icon}
              key={marker.name}
              position={{ lat: marker.lat, lng: marker.lng }}
            />
          );
        })}
    </GoogleMap>
  );
});

export default Map;
