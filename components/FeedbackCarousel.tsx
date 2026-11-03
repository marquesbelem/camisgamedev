"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Feedback } from "@/lib/site";

export function FeedbackCarousel({ items }: { items: Feedback[] }) {
  const ref = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const btn =
    "grid size-11 place-items-center rounded-full border-2 border-line transition hover:border-[var(--accent)]";

  return (
    <div className="mt-10">
      <ul
        ref={ref}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((f, i) => (
          <li
            key={`${f.name}-${i}`}
            className="flex w-[85%] shrink-0 snap-start flex-col rounded-3xl border border-line bg-surface p-6 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <Quote className="text-[var(--accent)]" size={24} aria-hidden />
            <p className="mt-4 flex-1 text-muted">“{f.review}”</p>
            <p className="font-display mt-5 text-sm">{f.name}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-end gap-3">
        <button type="button" onClick={() => scroll(-1)} className={btn} aria-label="Feedback anterior">
          <ChevronLeft size={20} aria-hidden />
        </button>
        <button type="button" onClick={() => scroll(1)} className={btn} aria-label="Próximo feedback">
          <ChevronRight size={20} aria-hidden />
        </button>
      </div>
    </div>
  );
}

