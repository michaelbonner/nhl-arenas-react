import React, { useState } from "react";
import mapStyles from "../data/map-styles";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Arena } from "../interfaces/arena";

declare const window: any;

interface Props {
  markers: Arena[];
}

const Map = ({ markers }: Props) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_KEY || "",
  });
  const [map, setMap] = useState(null);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: "90vh",
        maxHeight: `800px`,
      }}
      center={{ lat: 38.5223955, lng: -98.6003791 }}
      zoom={4}
      options={{
        styles: mapStyles,
      }}
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
  ) : (
    <></>
  );
};

export default Map;
