import { CardStage } from "@/components/ui/card-stage";
import { SHOWCASE_HOVER } from "@/components/ui/showcase-card";
import { ReportDocument } from "@/denarius/relatorios/_components/report-document";
import { relatorioDados } from "@/denarius/relatorios/relatorio-dados";
import { cn } from "@/lib/cn";
// Os estilos da folha (cores fixas de impressão) viajam com ela.
import "@/denarius/relatorios/report.css";

/**
 * A primeira folha do relatório executivo, desenhada em código (a mesma do
 * produto, em src/denarius/relatorios) e não numa imagem, para ficar nítida em
 * qualquer tela. A folha A4 (794px) ocupa quase a altura do card, centrada; a
 * segunda folha fica de fora.
 */
export function ReportSheet() {
  return (
    <CardStage width={794} fit={0.488} className={cn("top-[4%] left-1/2 -translate-x-1/2", SHOWCASE_HOVER)}>
      <div
        role="img"
        aria-label="Primeira página do relatório executivo do mês: resumo, veredito, gasto por provedor e gasto por time"
        className="report-preview-paper [&_[data-report-page='2']]:hidden"
      >
        <ReportDocument report={relatorioDados} variant="live" />
      </div>
    </CardStage>
  );
}
