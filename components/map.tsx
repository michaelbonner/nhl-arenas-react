import { Arena } from "../interfaces/arena";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";

declare const window: any;

interface Props {
  markers: Arena[];
}

const MapComponent = ({ markers }: Props) => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_KEY || ""}>
      <Map
        className="aspect-square lg:aspect-video"
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 38.5223955, lng: -98.6003791 }}
        defaultZoom={4}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId="57cb3890fb527662"
      >
        {markers &&
          markers.length > 0 &&
          markers.map((marker) => {
            return (
              <AdvancedMarker
                key={marker.name}
                position={{ lat: marker.lat, lng: marker.lng }}
              >
                <div>
                  <img src={marker.icon} alt={marker.name} />
                </div>
              </AdvancedMarker>
            );
          })}
      </Map>
    </APIProvider>
  );
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_KEY || "",
  // });

  // return isLoaded ? (
  //   <GoogleMap
  //     mapContainerClassName="aspect-square lg:aspect-video"
  //     center={{ lat: 38.5223955, lng: -98.6003791 }}
  //     zoom={4}
  //     options={{ mapId: "57cb3890fb527662" }}
  //   >
  //     {markers &&
  //       markers.length > 0 &&
  //       markers.map((marker) => {
  //         return (
  //           <Marker
  //             icon={marker.icon}
  //             key={marker.name}
  //             position={{ lat: marker.lat, lng: marker.lng }}
  //           />
  //         );
  //       })}
  //   </GoogleMap>
  // ) : (
  //   <></>
  // );
};

export default MapComponent;
