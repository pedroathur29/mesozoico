// Ícones (lucide) associados ao campo `icon` de cada categoria.
import { Shield, Cctv, Radar, Workflow, Plug, Cable, Box, type LucideIcon } from "lucide-react";

export const CATEGORY_ICONS: Record<string, LucideIcon> = {
  shield: Shield,
  camera: Cctv,
  sensor: Radar,
  automation: Workflow,
  plug: Plug,
  accessory: Cable,
  box: Box,
};

export function categoryIcon(key: string) {
  return CATEGORY_ICONS[key] ?? Box;
}
