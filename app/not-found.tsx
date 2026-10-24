import Link from "next/link";

export const metadata = {
  title: "Page not found | NHL Arenas I've Been To",
};

export default function NotFound() {
  return (
    <div className="container p-4 mx-auto">
      <h1 className="inline-block mt-4 mb-8 text-3xl font-medium text-left uppercase border-b-2 border-gray-800">
        Off the Map
      </h1>
      <div className="max-w-xl">
        <p className="text-sm font-medium tracking-wide text-gray-400 uppercase">Error 404</p>
        <p className="mt-2 text-xl font-medium">That page isn&apos;t on the schedule.</p>
        <p className="mt-2 text-gray-400">
          The link might be old, or the address has a typo. The arena map is back at center ice.
        </p>
        <Link
          className="inline-block px-4 py-2 mt-8 text-white bg-green-700 rounded-lg shadow-md hover:bg-green-800 focus:outline-hidden"
          href="/"
        >
          Back to the arena map
        </Link>
      </div>
    </div>
  );
}
