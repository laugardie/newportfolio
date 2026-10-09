// Places in /world. Each location keeps its artwork placement, ground
// footprint, depth anchor and interaction point together.
//
// Shapes are measured in artwork pixels (open the image and read the
// coordinates off it); `resolveLocation` turns them into world units.

import type { Polygon, Vec } from "@/components/world/geometry";
import { homeDialogue, type Dialogue } from "@/content/world/dialogues";

export type LocationDefinition = {
  id: string;
  dialogue: Dialogue;
  art: { src: string; width: number; height: number };
  // Where the artwork's top-left corner sits in the world, and how wide it is drawn.
  position: Vec;
  width: number;
  // Ground area the player can't walk through. Convex, in artwork pixels.
  footprint: Polygon;
  // Ground line for layering: the player draws behind the location when
  // their feet are above this line and in front when below it.
  depthY: number;
  // Spot the player walks to before the conversation opens. Keep it outside
  // the footprint (by at least the player's collision radius).
  interaction: Vec;
  // Rough silhouette that counts as clicking the location.
  hitArea: Polygon;
};

export const casita: LocationDefinition = {
  id: "casita",
  dialogue: homeDialogue,
  art: { src: "/world/computer-house.webp", width: 1000, height: 864 },
  position: { x: 220, y: 150 },
  width: 520,
  // The base of the computer: front edge, right side, and the hidden back corners.
  footprint: [
    { x: 160, y: 645 },
    { x: 775, y: 735 },
    { x: 920, y: 645 },
    { x: 305, y: 555 },
  ],
  depthY: 645,
  // On the keyboard doorstep, just in front of the door.
  interaction: { x: 400, y: 728 },
  hitArea: [
    { x: 160, y: 120 },
    { x: 240, y: 50 },
    { x: 330, y: 38 },
    { x: 830, y: 70 },
    { x: 895, y: 140 },
    { x: 925, y: 600 },
    { x: 915, y: 650 },
    { x: 770, y: 740 },
    { x: 660, y: 725 },
    { x: 650, y: 770 },
    { x: 590, y: 805 },
    { x: 470, y: 795 },
    { x: 130, y: 755 },
    { x: 115, y: 720 },
    { x: 165, y: 650 },
  ],
};

export type Location = LocationDefinition & {
  height: number;
  world: { footprint: Polygon; depthY: number; interaction: Vec; hitArea: Polygon };
};

export function resolveLocation(location: LocationDefinition): Location {
  const scale = location.width / location.art.width;
  const toWorld = (p: Vec) => ({
    x: location.position.x + p.x * scale,
    y: location.position.y + p.y * scale,
  });
  return {
    ...location,
    height: location.art.height * scale,
    world: {
      footprint: location.footprint.map(toWorld),
      depthY: location.position.y + location.depthY * scale,
      interaction: toWorld(location.interaction),
      hitArea: location.hitArea.map(toWorld),
    },
  };
}
