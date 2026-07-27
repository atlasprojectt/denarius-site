const FRAGMENTS = [
  "Provedores",
  "Chaves de API",
  "Projetos",
  "Modelos",
  "Times",
  "Assinaturas",
  "Gastos não atribuídos",
];

/**
 * Editorial composition: an argument that prepares the product's answer.
 * Title/description on one side, the fragmentation broken out as an ordered
 * list on the other, and a highlighted conclusion closing the section.
 */
export function ProblemSection() {
  return (
    <section id="problema" className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              O problema
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Os gastos com IA crescem mais rápido do que as empresas conseguem
              controlá-los.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              O custo não está em um só lugar. Ele se fragmenta em muitas frentes
              ao mesmo tempo, e cada uma tem sua própria conta.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Onde o gasto se fragmenta
            </p>
            <ul className="mt-3 divide-y divide-border">
              {FRAGMENTS.map((item) => (
                <li key={item} className="py-2.5 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-l-2 border-brand-accent pl-4 text-lg leading-8 text-foreground">
          Sem uma visão única, a empresa só percebe o excesso quando a fatura
          chega — tarde demais para reagir.
        </p>
      </div>
    </section>
  );
}
