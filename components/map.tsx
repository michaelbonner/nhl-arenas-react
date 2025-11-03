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
        backgroundColor={"#374151"}
        className="aspect-square lg:aspect-video bg-[#374151] rounded-t overflow-hidden"
        clickableIcons={false}
        defaultCenter={{ lat: 38.5223955, lng: -98.6003791 }}
        defaultZoom={4}
        disableDefaultUI={true}
        gestureHandling={"greedy"}
        mapId="57cb3890fb527662"
        maxZoom={10}
        minZoom={4}
        style={{ width: "100vw", height: "100vh" }}
      >
        {markers &&
          markers.length > 0 &&
          markers.map((marker) => {
            return (
              <AdvancedMarker
                key={marker.name}
                position={{ lat: marker.lat, lng: marker.lng }}
              >
                <div className="rounded-2xl bg-gray-100/90 size-10 p-1 shadow-sm group flex items-center justify-center border border-gray-200">
                  <Image
                    className="max-w-6 max-h-6 size-full object-contain object-center group-hover:scale-110 transition-all duration-300"
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
