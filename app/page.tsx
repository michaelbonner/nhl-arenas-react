import MapLayout from "../components/map-layout";

export default function Home() {
  return (
    <div className="container p-4 mx-auto">
      <h1 className="inline-block mt-4 mb-8 text-3xl font-medium text-left uppercase border-b-2 border-gray-800">
        NHL Arenas I&apos;ve Been To
      </h1>
      <MapLayout />
    </div>
  );
}
