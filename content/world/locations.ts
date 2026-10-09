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
  // Ground areas the player can't walk through. Each one convex, in artwork pixels.
  footprints: Polygon[];
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
  art: { src: "/world/computer-house.webp", width: 1522, height: 1033 },
  position: { x: 890, y: 600 },
  width: 950,
  footprints: [
    // The base of the computer: front edge, right side, and the hidden back corners.
    [
      { x: 423, y: 728 },
      { x: 933, y: 797 },
      { x: 1075, y: 690 },
      { x: 565, y: 621 },
    ],
    // The tree trunk.
    [
      { x: 305, y: 668 },
      { x: 355, y: 678 },
      { x: 415, y: 665 },
      { x: 405, y: 630 },
      { x: 325, y: 630 },
    ],
    // The pizza oven, the peel and the sleeping cat.
    [
      { x: 1137, y: 720 },
      { x: 1137, y: 785 },
      { x: 1175, y: 835 },
      { x: 1215, y: 858 },
      { x: 1320, y: 858 },
      { x: 1425, y: 842 },
      { x: 1440, y: 780 },
      { x: 1437, y: 720 },
      { x: 1290, y: 700 },
      { x: 1180, y: 705 },
    ],
  ],
  depthY: 700,
  // On the keyboard doorstep, just in front of the door.
  interaction: { x: 625, y: 795 },
  // The computer and its keyboard.
  hitArea: [
    { x: 440, y: 285 },
    { x: 470, y: 265 },
    { x: 560, y: 235 },
    { x: 1005, y: 262 },
    { x: 1060, y: 310 },
    { x: 1075, y: 345 },
    { x: 1080, y: 690 },
    { x: 940, y: 800 },
    { x: 850, y: 790 },
    { x: 805, y: 860 },
    { x: 780, y: 862 },
    { x: 380, y: 800 },
    { x: 378, y: 780 },
    { x: 420, y: 730 },
    { x: 425, y: 320 },
  ],
  control: { x: 380, y: 230, width: 700, height: 630 },
  openMask: "/world/computer-screen-mask.png",
};

// The beach, flush with the bottom-right corner of the world. Boardie, the surfboard leaning on the
// rocks, is the one you talk to.
export const beach: LocationDefinition = {
  id: "beach",
  name: "Boardie",
  dialogue: beachDialogue,
  art: { src: "/world/beach.webp", width: 1704, height: 781 },
  position: { x: 1600, y: 1350 },
  width: 1200,
  footprints: [
    // The trees and the strip of grass behind them.
    [
      { x: 661, y: 248 },
      { x: 661, y: 318 },
      { x: 341, y: 378 },
      { x: 291, y: 378 },
      { x: 201, y: 328 },
      { x: 291, y: 258 },
      { x: 481, y: 228 },
    ],
    // The rocks, the board and the arch.
    [
      { x: 491, y: 428 },
      { x: 581, y: 328 },
      { x: 861, y: 103 },
      { x: 1211, y: 138 },
      { x: 1461, y: 228 },
      { x: 1541, y: 348 },
      { x: 1521, y: 408 },
      { x: 1261, y: 458 },
      { x: 761, y: 490 },
      { x: 501, y: 478 },
    ],
    // The water, in two pieces so the sand in front of the board stays walkable.
    [
      { x: 1211, y: 528 },
      { x: 1211, y: 768 },
      { x: 961, y: 768 },
      { x: 611, y: 728 },
      { x: 521, y: 648 },
      { x: 781, y: 588 },
      { x: 1011, y: 548 },
    ],
    [
      { x: 1161, y: 458 },
      { x: 1611, y: 368 },
      { x: 1681, y: 468 },
      { x: 1706, y: 628 },
      { x: 1461, y: 768 },
      { x: 1211, y: 768 },
    ],
  ],
  // Just in front of the trees and the back of the rocks: anything walkable
  // above this line is behind the artwork.
  depthY: 308,
  // On the sand in front of the board.
  interaction: { x: 951, y: 518 },
  // The board, with some room around it so it's easy to tap.
  hitArea: [
    { x: 840, y: 95 },
    { x: 880, y: 100 },
    { x: 935, y: 250 },
    { x: 965, y: 400 },
    { x: 970, y: 470 },
    { x: 930, y: 480 },
    { x: 880, y: 420 },
    { x: 830, y: 250 },
    { x: 825, y: 150 },
  ],
  control: { x: 830, y: 105, width: 135, height: 360 },
  openMask: "/world/beach-board-mask.png",
};

export const locations = [casita, beach];

export type Location = LocationDefinition & {
  height: number;
  world: { footprints: Polygon[]; depthY: number; interaction: Vec; hitArea: Polygon };
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
      footprints: location.footprints.map((footprint) => footprint.map(toWorld)),
      depthY: location.position.y + location.depthY * scale,
      interaction: toWorld(location.interaction),
      hitArea: location.hitArea.map(toWorld),
    },
  };
}
