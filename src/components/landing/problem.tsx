import { Section } from "./section";

const FRAGMENTS = [
  "Provedores",
  "Chaves de API",
  "Projetos",
  "Modelos",
  "Times",
  "Assinaturas",
  "Uso não atribuído",
];

export function Problem() {
  return (
    <Section
      id="problema"
      eyebrow="O problema"
      title="Os gastos com IA crescem mais rápido do que as empresas conseguem controlá-los."
      intro="O custo se fragmenta em muitas frentes ao mesmo tempo. Na maioria das empresas, o excesso só aparece quando a fatura chega — tarde demais para reagir."
      narrow
    >
      <ul className="flex flex-wrap gap-2">
        {FRAGMENTS.map((item) => (
          <li
            key={item}
            className="rounded-md border border-black/10 px-3 py-1.5 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400"
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-8 text-base leading-7 text-zinc-600 dark:text-zinc-400">
        Sem uma visão única, ninguém consegue responder o essencial: quanto
        estamos gastando, quem está gerando o custo e se ainda dá tempo de agir.
      </p>
    </Section>
  );
}
