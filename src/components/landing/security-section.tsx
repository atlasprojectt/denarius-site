import {
  EyeIcon,
  KeyRoundIcon,
  FileTextIcon,
  UsersIcon,
  ClockIcon,
  BellIcon,
} from "lucide-react";
import { FeatureCard } from "@/components/feature-section";
import { Section } from "./section";

const POINTS = [
  {
    title: "Acesso somente para leitura",
    icon: <EyeIcon />,
    description:
      "As chaves são usadas apenas para ler dados de uso e custo. Nada é alterado ou bloqueado nas suas contas.",
  },
  {
    title: "Credenciais armazenadas com segurança",
    icon: <KeyRoundIcon />,
    description:
      "As chaves são criptografadas, nunca registradas em log e podem ser giradas ou revogadas a qualquer momento.",
  },
  {
    title: "Metadados, não conteúdo",
    icon: <FileTextIcon />,
    description:
      "Guardamos metadados de uso — tokens, custo, modelo, data. Prompts e respostas nunca são armazenados.",
  },
  {
    title: "Visibilidade individual por permissão",
    icon: <UsersIcon />,
    description:
      "O dado por pessoa é restrito a administradores por padrão e pode ser desativado, mantendo o foco nos times.",
  },
  {
    title: "Transparência sobre os dados",
    icon: <ClockIcon />,
    description:
      "Cada número mostra quando foi atualizado. Falhas de sincronização e gastos não atribuídos aparecem de forma explícita.",
  },
  {
    title: "Monitora e orienta, não bloqueia",
    icon: <BellIcon />,
    description:
      "O Denarius acompanha, avisa e recomenda. Ele não interrompe o uso dos provedores — a decisão é sempre da empresa.",
  },
];

export function SecuritySection() {
  return (
    <Section
      id="seguranca"
      eyebrow="Segurança e confiança"
      title="Criado para dados financeiros e de uso sensíveis."
    >
      <div className="overflow-hidden rounded-xl border border-border">
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((point) => (
            <FeatureCard
              key={point.title}
              feature={point}
              className="bg-background"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
