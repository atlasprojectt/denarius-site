const ITEMS = [
  "OpenAI e Anthropic",
  "Conexões somente para leitura",
  "Sem armazenamento de prompts ou respostas",
  "Orçamentos por empresa e por time",
];

/** Compact factual strip — no clients, stats, or testimonials. */
export function TrustStrip() {
  return (
    <section
      aria-label="Atributos do produto"
      className="border-y border-black/10 bg-black/[0.02] dark:border-white/10 dark:bg-white/[0.02]"
    >
      <ul className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400">
        {ITEMS.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-zinc-400"
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
