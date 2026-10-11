import { StatusPill } from "@/denarius/components/domain/status-pill";
import { Card, CardContent, CardHeader, CardTitle } from "@/denarius/components/ui/card";
import type { VerdictStatus } from "@/denarius/lib/engine/verdict";
import { SimulationWorkbench, type SimulationWorkbenchProps } from "./simulation-workbench";

// The simulation piece for the landing page: the team's name and budget
// status (the team page's header) over the workbench, in one card.
// Interactive: every swap and volume change recomputes in the browser through
// lib/engine/team-simulation — no server, no LLM.

export type SimulationDemoProps = {
  teamName: string;
  status: VerdictStatus;
  workbench: SimulationWorkbenchProps;
};

export function SimulationDemo({ teamName, status, workbench }: SimulationDemoProps) {
  return (
    <Card className="gap-6">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <CardTitle as="h2" className="text-2xl font-normal text-balance">
            {teamName}
          </CardTitle>
          <StatusPill status={status} />
        </div>
      </CardHeader>
      <CardContent>
        <SimulationWorkbench {...workbench} />
      </CardContent>
    </Card>
  );
}
