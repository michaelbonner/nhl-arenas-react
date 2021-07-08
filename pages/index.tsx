import Head from "next/head";
import { useState } from "react";
import Map from "../components/map";
import arenas from "../data/arenas";

export default function Home() {
  const [filteredResults, setFilteredResults] = useState(arenas);
  const [activeFilter, setActiveFilter] = useState("all");

  const filterResults = (filter: string) => {
    setActiveFilter(filter);
    switch (filter) {
      case "visited":
        setFilteredResults(
          arenas.filter((arena) => {
            return arena.visited;
          })
        );
        break;

      case "not visited":
        setFilteredResults(
          arenas.filter((arena) => {
            return !arena.visited;
          })
        );
        break;

      default:
        setFilteredResults(arenas);
        break;
    }

    return true;
  };

  const arenaInFiltered = (arena: any) => {
    const filtered = filteredResults.filter((filterArena) => {
      return filterArena.name === arena.name;
    }).length;
    return filtered;
  };

  const filters = [
    {
      name: "All",
      value: "all",
    },
    {
      name: "Visited",
      value: "visited",
    },
    {
      name: "Not Visited",
      value: "not visited",
    },
  ];

  return (
    <div className="p-4 container mx-auto">
      <Head>
        <title>NHL Arenas I&apos;ve Been To</title>
        <meta
          name="description"
          content="My way of keeping track of which NHL arenas I've been to"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta name="theme-color" content="#101727" />
      </Head>

      <h1 className="inline-block text-3xl font-medium text-left mt-4 mb-8 border-gray-800 border-b-2 uppercase">
        NHL Arenas I&apos;ve Been To
      </h1>
      <Map key="map" markers={filteredResults} />
      <div className="flex flex-wrap">
        {filters.map((filter) => {
          return (
            <div className="flex-1" key={filter.value}>
              <button
                className={`w-full shadow-md text-center block rounded-b-lg focus:outline-none ${
                  activeFilter === filter.value
                    ? `py-2 px-4 bg-green-500 hover:bg-green-700 text-white`
                    : `text-gray-300 bg-gray-700 hover:bg-gray-800 py-2 px-4`
                }`}
                type="button"
                onClick={() => filterResults(filter.value)}
              >
                {filter.name}
              </button>
            </div>
          );
        })}
      </div>
      <div className="py-8">
        <h2 className="text-xl font-medium uppercase">
          {activeFilter} Teams ({filteredResults.length})
        </h2>
        <div className="flex flex-wrap">
          {arenas.map((arena) => {
            return (
              <div
                key={arena.name}
                className={`w-full md:w-1/2 lg:w-1/3 py-4 ${
                  arenaInFiltered(arena) ? "opacity-100" : "opacity-25"
                }`}
              >
                <h3 className="text-lg font-medium">
                  {arena.visited ? (
                    <svg
                      className="inline pr-2 text-green-500 fill-current"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heroicon-ui"
                        d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="inline pr-2 text-red-500 fill-current"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="heroicon-ui"
                        d="M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07zm1.41-1.41A8 8 0 1 0 17.66 6.34 8 8 0 0 0 6.34 17.66zM13.41 12l1.42 1.41a1 1 0 1 1-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 1 1-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 1 1 1.42-1.42L12 10.6l1.41-1.42a1 1 0 1 1 1.42 1.42L13.4 12z"
                      />
                    </svg>
                  )}
                  {arena.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4">
        &copy;{new Date().getFullYear()}{" "}
        <a className="underline" href="https://michaelbonner.dev">
          Michael Bonner
        </a>
      </div>
    </div>
  );
}
