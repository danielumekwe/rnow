import Link from "next/link";
import { CircleHelp } from "lucide-react";

export default function ValveQuestionsStrip() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto flex max-w-[1400px] justify-center px-6 pb-10 xl:px-10">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark"
        >
          <CircleHelp className="h-4 w-4" aria-hidden="true" />
          Have questions? Contact a RNOW representative
        </Link>
      </div>
    </div>
  );
}
