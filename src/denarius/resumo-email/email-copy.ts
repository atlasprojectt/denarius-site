// The digest e-mail's fixed strings (lib/notify/render.ts, lib/email/layout.ts).

export const emailCopy = {
  subject: (month: string) => `Resumo semanal do Denarius — ${month}`,
  eyebrow: "Resumo semanal",
  title: (month: string) => `Seu gasto com IA em ${month}`,
  open: "Abrir o Denarius",
  linkHint: "Se o botão não funcionar, copie e cole este endereço no navegador:",
  footerNote: "Você recebe este e-mail por ser administrador no Denarius.",
  brandFooter: "Denarius · Governança de gasto com IA",
};
