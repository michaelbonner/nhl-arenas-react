import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
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

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="aspect-square lg:aspect-video"
      center={{ lat: 38.5223955, lng: -98.6003791 }}
      zoom={4}
      options={{ mapId: "57cb3890fb527662" }}
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
