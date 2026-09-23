import Image from "next/image";
import Link from "next/link";
import type { NewsArticle } from "@/data/news";

export default function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link href={`#news`} className="group flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className={
            article.imageFit === "contain"
              ? "object-contain p-6"
              : "object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          }
        />
      </div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
        {article.label}
      </p>
      <h3 className="mt-3 text-xl font-medium leading-snug text-ink">
        {article.title}
      </h3>
      <p className="mt-5 text-sm font-bold leading-snug text-accent">
        {article.linkText}{" "}
        <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          &gt;
        </span>
      </p>
    </Link>
  );
}
