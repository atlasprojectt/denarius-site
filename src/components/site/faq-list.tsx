import { ChevronDownIcon } from "@/components/ui/state-icons";
import type { FaqItem } from "@/content/faq";
import { cn } from "@/lib/cn";

/** Perguntas que abrem no lugar, sem modal: details e summary nativos. */
export function FaqList({ items, className }: { items: FaqItem[]; className?: string }) {
  return (
    <div className={cn("border-t border-hairline", className)}>
      {items.map((item) => (
        <details key={item.id} id={item.id} className="group scroll-mt-20 border-b border-hairline">
          <summary className="type-title flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-5 text-ink [&::-webkit-details-marker]:hidden">
            {item.question}
            <ChevronDownIcon className="size-4 shrink-0 text-mist transition-transform duration-180 ease-standard group-open:rotate-180 motion-reduce:transition-none" />
          </summary>
          <p className="type-lead max-w-[65ch] pb-6 text-graphite">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
