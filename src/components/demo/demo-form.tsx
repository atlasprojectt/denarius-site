"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { buttonClasses } from "@/components/ui/button-link";
import { ArrowRightIcon, ChevronDownIcon, DoneIcon } from "@/components/ui/state-icons";
import { cn } from "@/lib/cn";
import {
  COMPANY_SIZES,
  MESSAGE_MAX,
  MONTHLY_SPEND,
  PROVIDERS,
  ROLES,
  parseDemoRequest,
  type DemoField,
  type DemoRequest,
  type FieldErrors,
} from "@/lib/demo/request";
import { PRIVACY_URL } from "@/lib/links";

type Status = "idle" | "submitting" | "success";

const EMPTY: DemoRequest = {
  name: "",
  email: "",
  phone: "",
  role: "" as DemoRequest["role"],
  company: "",
  companySize: "" as DemoRequest["companySize"],
  providers: [],
  monthlySpend: "",
  message: "",
};

/** Ordem visual dos campos: o foco vai para o primeiro inválido. */
const FIELD_ORDER: DemoField[] = [
  "name",
  "email",
  "company",
  "companySize",
  "role",
  "phone",
  "providers",
  "monthlySpend",
  "message",
];

/**
 * Campo do DESIGN.md: superfície de controle, hairline, raio sm, foco visível.
 * Sem cor de texto: cada campo põe a sua (o cn só junta classes, e um
 * text-ink aqui brigaria com o text-ash do select vazio).
 */
const CONTROL =
  "type-body w-full min-w-0 rounded-sm bg-control ring-1 ring-inset ring-hairline transition-[box-shadow,background-color] duration-150 ease-standard placeholder:text-ash hover:ring-ink/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus disabled:opacity-50 aria-invalid:ring-red-fg";

const UNAVAILABLE =
  "Não foi possível conectar. Seus dados continuam no formulário; tente novamente.";

/**
 * O formulário de pedido de demonstração. Valida no cliente com as mesmas
 * regras do servidor (lib/demo/request.ts), marca o campo certo e leva o foco
 * ao primeiro erro; depois do envio, mostra a confirmação no lugar.
 */
export function DemoForm() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const confirmationRef = useRef<HTMLHeadingElement>(null);
  const startedAt = useRef(0);
  const [values, setValues] = useState<DemoRequest>(EMPTY);
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  // O relógio do anti-spam começa quando o formulário aparece para a pessoa.
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status === "success") confirmationRef.current?.focus();
  }, [status]);

  const id = (field: string) => `${uid}-${field}`;
  const submitting = status === "submitting";

  function update<K extends DemoField>(field: K, value: DemoRequest[K]) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
    setFormError(null);
  }

  function toggleProvider(value: DemoRequest["providers"][number], checked: boolean) {
    update(
      "providers",
      checked ? [...values.providers, value] : values.providers.filter((p) => p !== value),
    );
  }

  function focusFirstInvalid(fieldErrors: FieldErrors) {
    const first = FIELD_ORDER.find((field) => fieldErrors[field]);
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const parsed = parseDemoRequest(values);
    if (!parsed.ok) {
      setErrors(parsed.errors);
      setFormError("Confira os campos destacados.");
      focusFirstInvalid(parsed.errors);
      return;
    }

    setErrors({});
    setFormError(null);
    setStatus("submitting");

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, website, startedAt: startedAt.current }),
      });
      const payload = (await response.json().catch(() => null)) as {
        message?: string;
        errors?: FieldErrors;
      } | null;

      if (response.ok) {
        setStatus("success");
        return;
      }
      setStatus("idle");
      setFormError(payload?.message ?? UNAVAILABLE);
      if (payload?.errors) {
        setErrors(payload.errors);
        focusFirstInvalid(payload.errors);
      }
    } catch {
      setStatus("idle");
      setFormError(UNAVAILABLE);
    }
  }

  if (status === "success") {
    const firstName = values.name.split(" ")[0];
    return (
      <div role="status" className="flex flex-col items-start py-2">
        <DoneIcon className="size-7 text-green-fg" />
        <h2
          ref={confirmationRef}
          tabIndex={-1}
          className="type-title-lg mt-4 text-ink focus:outline-none"
        >
          Pedido recebido.
        </h2>
        <p className="type-body mt-2 max-w-[44ch] text-graphite">
          Obrigado, {firstName}. Vamos responder em{" "}
          <span className="type-body-strong text-ink">{values.email}</span> para combinar o horário
          da demonstração.
        </p>
        <Link href="/" className={cn(buttonClasses({ variant: "secondary" }), "mt-8")}>
          Voltar ao início
        </Link>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate aria-busy={submitting}>
      <h2 className="type-title-lg text-ink">Pedir demonstração</h2>
      <p className="type-caption mt-1 text-ash">Campos com * são obrigatórios.</p>

      {/* Campo isca: fora da tela e fora do Tab. Pessoas não o veem; robôs que
          preenchem todo input o entregam e o pedido é descartado. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={id("website")}>Site</label>
        <input
          id={id("website")}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      <div className="mt-6 grid gap-x-4 gap-y-5 sm:grid-cols-2">
        <Field id={id("name")} label="Nome" required error={errors.name}>
          <input
            id={id("name")}
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            placeholder="Seu nome completo"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            disabled={submitting}
            {...invalid(id("name"), errors.name)}
            className={cn(CONTROL, "h-11 px-3.5 text-ink")}
          />
        </Field>

        <Field id={id("email")} label="E-mail corporativo" required error={errors.email}>
          <input
            id={id("email")}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            maxLength={254}
            placeholder="voce@suaempresa.com"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            disabled={submitting}
            {...invalid(id("email"), errors.email)}
            className={cn(CONTROL, "h-11 px-3.5 text-ink")}
          />
        </Field>

        <Field id={id("company")} label="Empresa" required error={errors.company}>
          <input
            id={id("company")}
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={100}
            placeholder="Nome da empresa"
            value={values.company}
            onChange={(event) => update("company", event.target.value)}
            disabled={submitting}
            {...invalid(id("company"), errors.company)}
            className={cn(CONTROL, "h-11 px-3.5 text-ink")}
          />
        </Field>

        <Field id={id("companySize")} label="Tamanho da empresa" required error={errors.companySize}>
          <Select
            id={id("companySize")}
            name="companySize"
            value={values.companySize}
            options={COMPANY_SIZES}
            onChange={(value) => update("companySize", value as DemoRequest["companySize"])}
            disabled={submitting}
            error={errors.companySize}
          />
        </Field>

        <Field id={id("role")} label="Seu papel" required error={errors.role}>
          <Select
            id={id("role")}
            name="role"
            value={values.role}
            options={ROLES}
            onChange={(value) => update("role", value as DemoRequest["role"])}
            disabled={submitting}
            error={errors.role}
          />
        </Field>

        <Field id={id("phone")} label="Telefone ou WhatsApp" optional error={errors.phone}>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={30}
            placeholder="(11) 90000-0000"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            disabled={submitting}
            {...invalid(id("phone"), errors.phone)}
            className={cn(CONTROL, "h-11 px-3.5 text-ink")}
          />
        </Field>

        <fieldset className="sm:col-span-2">
          <legend className="type-ui-strong text-ink">
            Provedores de IA em uso <span className="type-ui text-ash">(opcional)</span>
          </legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {PROVIDERS.map((provider) => (
              <label
                key={provider.value}
                className="type-ui inline-flex h-10 cursor-pointer items-center gap-2.5 rounded-full bg-control px-4 text-ink ring-1 ring-inset ring-hairline transition-[box-shadow,background-color] duration-150 ease-standard hover:ring-ink/20 has-checked:bg-hover has-checked:ring-ink/40 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-focus has-disabled:opacity-50"
              >
                <input
                  type="checkbox"
                  name="providers"
                  value={provider.value}
                  checked={values.providers.includes(provider.value)}
                  onChange={(event) => toggleProvider(provider.value, event.target.checked)}
                  disabled={submitting}
                  className="size-4 accent-[var(--ink)] focus:outline-none"
                />
                {provider.label}
              </label>
            ))}
          </div>
        </fieldset>

        <Field
          id={id("monthlySpend")}
          label="Gasto mensal aproximado com IA"
          optional
          className="sm:col-span-2"
        >
          <Select
            id={id("monthlySpend")}
            name="monthlySpend"
            value={values.monthlySpend}
            options={MONTHLY_SPEND}
            onChange={(value) => update("monthlySpend", value as DemoRequest["monthlySpend"])}
            disabled={submitting}
          />
        </Field>

        <Field id={id("message")} label="Algo que devemos saber?" optional className="sm:col-span-2">
          <textarea
            id={id("message")}
            name="message"
            rows={4}
            maxLength={MESSAGE_MAX}
            placeholder="Ex.: queremos entender o gasto por time antes do fechamento do mês."
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            disabled={submitting}
            className={cn(CONTROL, "block resize-y px-3.5 py-3 text-ink")}
          />
        </Field>
      </div>

      <div aria-live="polite" className="min-h-6">
        {formError ? <p className="type-ui mt-4 text-red-fg">{formError}</p> : null}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className={cn(buttonClasses(), "group mt-4 w-full disabled:opacity-60")}
      >
        {submitting ? "Enviando…" : "Pedir demonstração"}
        {submitting ? null : (
          <ArrowRightIcon className="size-4 transition-transform duration-150 ease-standard group-hover:translate-x-0.5 motion-reduce:transition-none" />
        )}
      </button>

      <p className="type-caption mt-4 text-ash">
        Usamos esses dados só para responder ao seu pedido. Veja a{" "}
        <a
          href={PRIVACY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-graphite hover:text-ink"
        >
          política de privacidade
        </a>
        .
      </p>
    </form>
  );
}

function invalid(fieldId: string, error: string | undefined) {
  return error ? { "aria-invalid": true as const, "aria-describedby": `${fieldId}-error` } : {};
}

function Field({
  id,
  label,
  required,
  optional,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="type-ui-strong block text-ink">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-ash">
            {" "}
            *
          </span>
        ) : null}
        {optional ? <span className="type-ui text-ash"> (opcional)</span> : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="type-caption mt-1.5 text-red-fg">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** `select` nativo: teclado, leitor de tela e roda do celular de graça. */
function Select({
  id,
  name,
  value,
  options,
  onChange,
  disabled,
  error,
}: {
  id: string;
  name: string;
  value: string;
  options: readonly { value: string; label: string }[];
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        {...invalid(id, error)}
        className={cn(CONTROL, "h-11 appearance-none pr-10 pl-3.5", value === "" ? "text-ash" : "text-ink")}
      >
        <option value="" disabled>
          Selecione
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-ink">
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-graphite" />
    </div>
  );
}
