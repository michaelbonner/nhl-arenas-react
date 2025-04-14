"use client";

import { useState } from "react";
import Map from "../components/map";
import arenas from "../data/arenas";

export default function MapLayout() {
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
    <div>
      <div className="aspect-square lg:aspect-video">
        <Map key="map" markers={filteredResults} />
      </div>
      <div className="flex flex-wrap">
        {filters.map((filter) => {
          return (
            <div className="flex-1" key={filter.value}>
              <button
                className={`w-full shadow-md text-center block rounded-b-lg focus:outline-hidden ${
                  activeFilter === filter.value
                    ? `py-2 px-4 bg-green-700 hover:bg-green-800 text-white`
                    : `text-gray-300 bg-gray-800 hover:bg-gray-900 py-2 px-4`
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
                      <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z" />
                    </svg>
                  ) : (
                    <svg
                      className="inline pr-2 text-red-500 fill-current"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07zm1.41-1.41A8 8 0 1 0 17.66 6.34 8 8 0 0 0 6.34 17.66zM13.41 12l1.42 1.41a1 1 0 1 1-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 1 1-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 1 1 1.42-1.42L12 10.6l1.41-1.42a1 1 0 1 1 1.42 1.42L13.4 12z" />
                    </svg>
                  )}
                  {arena.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
