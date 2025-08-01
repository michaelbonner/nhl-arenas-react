import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import { Arena } from "../interfaces/arena";
import Image from "next/image";

interface Props {
  markers: Arena[];
}

const MapComponent = ({ markers }: Props) => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_KEY || ""}>
      <Map
        className="aspect-square lg:aspect-video bg-[#374151] rounded-t overflow-hidden"
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 38.5223955, lng: -98.6003791 }}
        defaultZoom={4}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId="57cb3890fb527662"
        backgroundColor={"#374151"}
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
                  <Image
                    src={marker.icon.src}
                    alt={marker.name}
                    width={marker.icon.width}
                    height={marker.icon.height}
                  />
                </div>
              </AdvancedMarker>
            );
          })}
      </Map>
    </APIProvider>
  );
};

export default MapComponent;
