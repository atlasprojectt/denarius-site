import { handleDemoRequest, type DemoResult } from "@/lib/demo/handle";
import { clientIp } from "@/lib/demo/spam";

/** Um pedido legítimo tem poucos KB; acima disso não vale nem ler. */
const MAX_BODY_BYTES = 16 * 1024;

function reply({ status, body }: DemoResult) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

/**
 * Recebe o pedido de demonstração do formulário de /demonstracao. A rota só
 * lê o corpo e responde; o fluxo (spam, validação, e-mail, envio) está em
 * lib/demo/handle.ts, e o destino do envio em lib/demo/delivery.
 */
export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) {
    return reply({ status: 413, body: { ok: false, message: "Pedido grande demais." } });
  }

  let raw: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error();
    raw = parsed as Record<string, unknown>;
  } catch {
    return reply({ status: 400, body: { ok: false, message: "Confira os dados enviados." } });
  }

  return reply(await handleDemoRequest(raw, clientIp(request.headers)));
}
