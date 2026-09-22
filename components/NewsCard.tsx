import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NewsArticle } from "@/data/news";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link href={`#news`} className="group flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-surface">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
        <span>{article.category}</span>
        <span className="h-1 w-1 rounded-full bg-gray-300" aria-hidden="true" />
        <time dateTime={article.date} className="text-gray-500">
          {formatDate(article.date)}
        </time>
      </div>
      <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-ink">
        {article.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {article.excerpt}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
        Read More
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
