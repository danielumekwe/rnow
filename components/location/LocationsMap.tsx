"use client";

import { useMemo, useState } from "react";
import { Maximize, Search } from "lucide-react";
import { locationOffices, regionClusters } from "@/data/locations";

export default function LocationsMap() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"map" | "satellite">("map");

  const filteredOffices = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return locationOffices;
    return locationOffices.filter((office) =>
      [office.name, office.city, office.state, office.country, office.zip]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <div className="mx-auto max-w-[1400px] px-6 xl:px-10">
      <div className="grid grid-cols-1 border border-gray-200 lg:grid-cols-[320px_1fr]">
        <div className="flex max-h-[640px] flex-col border-b border-gray-200 lg:max-h-[720px] lg:border-b-0 lg:border-r">
          <div className="border-b border-gray-200 p-4">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Country, City, State, Zip"
                className="w-full border border-gray-300 bg-white py-2.5 pl-3 pr-10 text-sm text-ink placeholder:text-gray-400 focus:border-accent focus:outline-none"
              />
              <Search
                className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <button
              type="button"
              onClick={() => setQuery((q) => q)}
              className="mt-3 w-full bg-accent py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Filter Locations
            </button>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-gray-200">
            {filteredOffices.length === 0 && (
              <p className="p-5 text-sm text-gray-500">
                No locations match that search.
              </p>
            )}
            {filteredOffices.map((office) => (
              <div key={`${office.name}-${office.country}`} className="p-5">
                <p className="text-lg font-semibold text-accent">
                  {office.name} ({office.brand})
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  {office.address1}
                  {office.address2 ? `, ${office.address2}` : ""}
                  <br />
                  {office.city}
                  {office.state ? `, ${office.state}` : ""} {office.country}
                </p>
                <a
                  href={`tel:${office.phoneHref}`}
                  className="mt-2 inline-block text-sm text-ink hover:text-accent"
                >
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[720px]">
          <div className="absolute left-4 top-4 z-10 flex overflow-hidden rounded-sm border border-gray-300 bg-white text-sm shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab("map")}
              className={`px-4 py-2 font-medium ${
                activeTab === "map" ? "bg-white text-ink" : "bg-gray-50 text-gray-500"
              }`}
            >
              Map
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("satellite")}
              className={`px-4 py-2 font-medium ${
                activeTab === "satellite" ? "bg-white text-ink" : "bg-gray-50 text-gray-500"
              }`}
            >
              Satellite
            </button>
          </div>

          <div className="absolute right-4 top-4 z-10 rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
            <Maximize className="h-4 w-4 text-gray-600" aria-hidden="true" />
          </div>

          <iframe
            title="RNOW office locations map"
            src={`https://maps.google.com/maps?q=20,0&z=2&t=${
              activeTab === "satellite" ? "k" : "m"
            }&output=embed`}
            className="h-full w-full"
            style={{ border: 0, minHeight: 420 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="pointer-events-none absolute inset-0">
            {regionClusters.map((region) => (
              <span
                key={region.label}
                title={region.label}
                className={`absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-sm font-bold text-white shadow-md ring-4 ${
                  region.color === "orange"
                    ? "bg-amber-400 ring-amber-400/30"
                    : "bg-sky-500 ring-sky-500/30"
                }`}
                style={{ top: region.top, left: region.left }}
              >
                {region.count}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
