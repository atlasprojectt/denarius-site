const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type WaitlistEntry = { name: string; email: string };

function normalizePayload(value: unknown): WaitlistEntry | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;

  const { name, email } = value as Record<string, unknown>;
  if (typeof name !== "string" || typeof email !== "string") return null;

  const normalizedName = name.trim().replace(/\s+/g, " ");
  const normalizedEmail = email.trim().toLowerCase();

  if (normalizedName.length < 2 || normalizedName.length > 100) return null;
  if (normalizedEmail.length > 254 || !EMAIL_PATTERN.test(normalizedEmail)) {
    return null;
  }

  return { name: normalizedName, email: normalizedEmail };
}

function json(message: string, status: number) {
  return Response.json(
    { ok: status === 200, message },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  let rawPayload: unknown;
  try {
    rawPayload = await request.json();
  } catch {
    return json("Confira os dados enviados.", 400);
  }

  const entry = normalizePayload(rawPayload);
  if (!entry) return json("Confira nome e e-mail.", 400);

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.WAITLIST_FROM_EMAIL?.trim();
  const to = process.env.WAITLIST_TO_EMAIL?.trim();

  if (!apiKey || !from || !to) {
    return json(
      "A lista de acesso está temporariamente indisponível. Tente novamente mais tarde.",
      503,
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: entry.email,
        subject: "Nova inscrição na lista de acesso do Denarius",
        text: [
          "Uma nova empresa solicitou acesso ao Denarius.",
          "",
          `Nome: ${entry.name}`,
          `E-mail: ${entry.email}`,
        ].join("\n"),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      return json(
        "Não foi possível enviar agora. Seus dados foram mantidos no formulário; tente novamente.",
        502,
      );
    }

    return json("Inscrição enviada.", 200);
  } catch {
    return json(
      "Não foi possível enviar agora. Seus dados foram mantidos no formulário; tente novamente.",
      502,
    );
  }
}
