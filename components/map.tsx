import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import { Arena } from "../interfaces/arena";

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
};

export default MapComponent;
