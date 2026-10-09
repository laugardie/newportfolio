// Places in /world. Each location keeps its artwork placement, ground
// footprint, depth anchor and interaction point together.
//
// Shapes are measured in artwork pixels (open the image and read the
// coordinates off it); `resolveLocation` turns them into world units.

import type { Polygon, Vec } from "@/components/world/geometry";
import { beachDialogue, homeDialogue, type Dialogue } from "@/content/world/dialogues";

export type Rect = { x: number; y: number; width: number; height: number };

export type LocationDefinition = {
  id: string;
  // Shown in the hover/focus label and read out by screen readers.
  name: string;
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
  // The keyboard-focusable box the label sits above. Defaults to the whole artwork.
  control?: Rect;
  // Mask (same size as the artwork) of the part that turns white while the
  // dialogue is open.
  openMask?: string;
};

export const casita: LocationDefinition = {
  id: "casita",
  name: "Casita",
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
  openMask: "/world/computer-screen-mask.png",
};

// The beach in the bottom-right corner. Boardie, the surfboard leaning on the
// rocks, is the one you talk to.
export const beach: LocationDefinition = {
  id: "beach",
  name: "Boardie",
  dialogue: beachDialogue,
  art: { src: "/world/beach.webp", width: 1445, height: 766 },
  position: { x: 515, y: 652 },
  width: 440,
  // Rocks, board and water: everything but the strip of sand at the front.
  footprint: [
    { x: 10, y: 450 },
    { x: 80, y: 320 },
    { x: 500, y: 250 },
    { x: 1100, y: 250 },
    { x: 1380, y: 370 },
    { x: 1445, y: 560 },
    { x: 1400, y: 690 },
    { x: 1150, y: 765 },
    { x: 850, y: 735 },
    { x: 170, y: 640 },
  ],
  // Anywhere between the back of the rocks and the front of the footprint.
  depthY: 600,
  // On the sand in front of the board.
  interaction: { x: 470, y: 745 },
  // The board, with some room around it so it's easy to tap.
  hitArea: [
    { x: 385, y: 270 },
    { x: 430, y: 275 },
    { x: 495, y: 380 },
    { x: 545, y: 520 },
    { x: 550, y: 640 },
    { x: 490, y: 665 },
    { x: 435, y: 630 },
    { x: 360, y: 470 },
    { x: 350, y: 330 },
  ],
  control: { x: 370, y: 290, width: 160, height: 350 },
  openMask: "/world/beach-board-mask.png",
};

export const locations = [casita, beach];

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
