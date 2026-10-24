"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, retry }: { error: unknown; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const digest =
    typeof error === "object" &&
    error !== null &&
    "digest" in error &&
    typeof error.digest === "string"
      ? error.digest
      : undefined;

  return (
    <div className="container p-4 mx-auto">
      <h1 className="inline-block mt-4 mb-8 text-3xl font-medium text-left uppercase border-b-2 border-gray-800">
        Whistle Blown
      </h1>
      <div className="max-w-xl">
        <p className="text-xl font-medium">Something went wrong loading this page.</p>
        <p className="mt-2 text-gray-400">
          Play has stopped for a moment. Try again, or head back to the arena map.
        </p>
        {digest ? (
          <p className="mt-4 text-sm text-gray-500">
            Reference: <code>{digest}</code>
          </p>
        ) : null}
        <div className="flex flex-wrap gap-4 mt-8">
          <button
            className="px-4 py-2 text-white bg-green-700 rounded-lg shadow-md hover:bg-green-800 focus:outline-hidden"
            type="button"
            onClick={() => retry()}
          >
            Try again
          </button>
          <Link
            className="px-4 py-2 text-gray-300 bg-gray-800 rounded-lg shadow-md hover:bg-gray-950 focus:outline-hidden"
            href="/"
          >
            Back to the arena map
          </Link>
        </div>
      </div>
    </div>
  );
}
