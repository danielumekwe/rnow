import type { Metadata } from "next";
import LocationsHeader from "@/components/location/LocationsHeader";
import LocationsMap from "@/components/location/LocationsMap";

export const metadata: Metadata = {
  title: "Our Locations",
  description:
    "Find RNOW Industrial Supply's corporate office and branch locations around the world.",
};

export default function LocationPage() {
  return (
    <div className="bg-white pb-20">
      <LocationsHeader />
      <LocationsMap />
    </div>
  );
}
