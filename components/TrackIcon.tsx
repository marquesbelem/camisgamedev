import { Blocks, Cpu, Gamepad2, Globe, Puzzle } from "lucide-react";
import type { Track } from "@/lib/site";

const ICONS = { puzzle: Puzzle, blocks: Blocks, gamepad: Gamepad2, globe: Globe, cpu: Cpu };

export function TrackIcon({ icon, size = 28 }: { icon: Track["icon"]; size?: number }) {
  const I = ICONS[icon];
  return <I size={size} aria-hidden />;
}
