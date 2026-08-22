export function isValidEmail(value: string): boolean {
  const email = value.trim();
  return (
    email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
  );
}

export function isValidName(value: string): boolean {
  const name = value.trim().replace(/\s+/g, " ");
  return name.length >= 2 && name.length <= 100;
}

export type WaitlistResult = { ok: true } | { ok: false; message: string };
export type WaitlistEntry = { name: string; email: string };

export async function submitWaitlist(
  entry: WaitlistEntry,
): Promise<WaitlistResult> {
  if (!isValidName(entry.name)) {
    return { ok: false, message: "Informe seu nome." };
  }

  if (!isValidEmail(entry.email)) {
    return { ok: false, message: "Confira o e-mail digitado." };
  }

  try {
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    });
    const payload = (await response.json().catch(() => null)) as
      | { message?: string }
      | null;

    if (response.ok) return { ok: true };

    return {
      ok: false,
      message:
        payload?.message ??
        "Não foi possível enviar agora. Seus dados foram mantidos; tente novamente.",
    };
  } catch {
    return {
      ok: false,
      message:
        "Não foi possível conectar. Seus dados foram mantidos; tente novamente.",
    };
  }
}
