// Pedido de demonstração: o contrato entre o formulário e `/api/demo`.
// Puro (sem I/O): o cliente valida com estas regras para marcar o campo certo
// na hora, e o servidor valida de novo com as mesmas, como autoridade. Para
// mudar os campos, mude só aqui (e o formulário que os desenha).

export const ROLES = [
  { value: "ceo", label: "CEO ou fundador(a)" },
  { value: "cto", label: "CTO ou engenharia" },
  { value: "finance", label: "Financeiro ou CFO" },
  { value: "operations", label: "Operações ou FinOps" },
  { value: "other", label: "Outro" },
] as const;

export const COMPANY_SIZES = [
  { value: "1-19", label: "1 a 19 pessoas" },
  { value: "20-49", label: "20 a 49 pessoas" },
  { value: "50-99", label: "50 a 99 pessoas" },
  { value: "100-199", label: "100 a 199 pessoas" },
  { value: "200-499", label: "200 a 499 pessoas" },
  { value: "500+", label: "500 pessoas ou mais" },
] as const;

export const PROVIDERS = [
  { value: "openai", label: "OpenAI" },
  { value: "anthropic", label: "Anthropic" },
  { value: "other", label: "Outros provedores" },
] as const;

export const MONTHLY_SPEND = [
  { value: "unknown", label: "Ainda não sabemos" },
  { value: "lt5k", label: "Até R$ 5 mil" },
  { value: "5k-20k", label: "R$ 5 mil a R$ 20 mil" },
  { value: "20k-100k", label: "R$ 20 mil a R$ 100 mil" },
  { value: "gt100k", label: "Acima de R$ 100 mil" },
] as const;

type ValueOf<T extends readonly { value: string }[]> = T[number]["value"];

export type DemoRequest = {
  name: string;
  email: string;
  phone: string;
  role: ValueOf<typeof ROLES>;
  company: string;
  companySize: ValueOf<typeof COMPANY_SIZES>;
  providers: ValueOf<typeof PROVIDERS>[];
  monthlySpend: ValueOf<typeof MONTHLY_SPEND> | "";
  message: string;
};

export type DemoField = keyof DemoRequest;
export type FieldErrors = Partial<Record<DemoField, string>>;

/** O que o formulário envia além dos campos: as armadilhas anti-spam. */
export type DemoSubmission = DemoRequest & {
  /** Campo isca, invisível para pessoas. Preenchido = robô. */
  website: string;
  /** `Date.now()` de quando o formulário montou. */
  startedAt: number;
};

export const MESSAGE_MAX = 1000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function text(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, max);
}

function oneOf<T extends readonly { value: string }[]>(
  options: T,
  value: unknown,
): ValueOf<T> | "" {
  return options.some((option) => option.value === value)
    ? (value as ValueOf<T>)
    : "";
}

export function labelOf(
  options: readonly { value: string; label: string }[],
  value: string,
): string {
  return options.find((option) => option.value === value)?.label ?? value;
}

/**
 * Normaliza um payload qualquer (vindo do cliente ou da rede) e devolve os
 * dados limpos ou o primeiro erro de cada campo. Valores fora das listas viram
 * vazio em vez de passar adiante: nada que chega ao e-mail foge do contrato.
 */
export function parseDemoRequest(
  raw: unknown,
): { ok: true; data: DemoRequest } | { ok: false; errors: FieldErrors } {
  const input =
    raw && typeof raw === "object" && !Array.isArray(raw)
      ? (raw as Record<string, unknown>)
      : {};

  const name = text(input.name, 120);
  const email = text(input.email, 300).toLowerCase();
  const phone = text(input.phone, 40);
  const role = oneOf(ROLES, input.role);
  const company = text(input.company, 120);
  const companySize = oneOf(COMPANY_SIZES, input.companySize);
  const monthlySpend = oneOf(MONTHLY_SPEND, input.monthlySpend);
  const picked: unknown[] = Array.isArray(input.providers) ? input.providers : [];
  const providers = PROVIDERS.map((p) => p.value).filter((value) => picked.includes(value));
  // A mensagem preserva quebras de linha; só as pontas são aparadas.
  const message =
    typeof input.message === "string" ? input.message.trim().slice(0, MESSAGE_MAX) : "";

  const errors: FieldErrors = {};
  if (name.length < 2 || name.length > 100) errors.name = "Informe seu nome.";
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    errors.email = "Confira o e-mail digitado.";
  }
  if (phone) {
    const digits = phone.replace(/\D/g, "");
    if (!/^[\d\s()+.-]+$/.test(phone) || digits.length < 10 || digits.length > 15) {
      errors.phone = "Confira o telefone, com DDD.";
    }
  }
  if (!role) errors.role = "Selecione seu papel na empresa.";
  if (company.length < 2 || company.length > 100) errors.company = "Informe o nome da empresa.";
  if (!companySize) errors.companySize = "Selecione o tamanho da empresa.";

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      role: role as DemoRequest["role"],
      company,
      companySize: companySize as DemoRequest["companySize"],
      providers,
      monthlySpend,
      message,
    },
  };
}
