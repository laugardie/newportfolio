// Places in /world. Each location keeps its artwork placement, ground
// footprint, depth anchor and interaction point together.
//
// Shapes are measured in artwork pixels (open the image and read the
// coordinates off it); `resolveLocation` turns them into world units.

import type { Polygon, Vec } from "@/components/world/geometry";
import {
  beachDialogue,
  evergroundDialogue,
  habitsDialogue,
  homeDialogue,
  nutritionDialogue,
  sproutDialogue,
  tataiDialogue,
  type Dialogue,
} from "@/content/world/dialogues";

export type Rect = { x: number; y: number; width: number; height: number };

// An illustration placed in the world: where its top-left corner sits and how
// wide it is drawn.
export type Artwork = {
  art: { src: string; width: number; height: number };
  position: Vec;
  width: number;
};

export type LocationDefinition = Artwork & {
  id: string;
  // Shown in the hover/focus label and read out by screen readers.
  name: string;
  dialogue: Dialogue;
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
  // For locations that share one illustration: the part of it that belongs to
  // this location. Only that cut-out is drawn at the location's depth; the
  // whole illustration lies flat on the ground (see `grounds`).
  layer?: Polygon;
  // Remembers the visit and shows a check next to the label once it's been talked to.
  tracksVisit?: boolean;
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

// The "Small bets" garden in the bottom-left corner: Sprout's greenhouse and
// four raised beds, one per project, all in one illustration. The soil paths
// between them are walkable.
const garden: Artwork = {
  art: { src: "/world/garden.webp", width: 1639, height: 960 },
  position: { x: 40, y: 1130 },
  width: 1300,
};

export const sprout: LocationDefinition = {
  ...garden,
  id: "sprout",
  name: "Sprout",
  dialogue: sproutDialogue,
  footprints: [
    [
      { x: 158, y: 628 },
      { x: 522, y: 650 },
      { x: 618, y: 548 },
      { x: 255, y: 525 },
    ],
  ],
  depthY: 588,
  // On the sand in front of the door.
  interaction: { x: 350, y: 692 },
  hitArea: [
    { x: 150, y: 372 },
    { x: 295, y: 198 },
    { x: 453, y: 112 },
    { x: 628, y: 262 },
    { x: 622, y: 548 },
    { x: 526, y: 658 },
    { x: 152, y: 634 },
  ],
  layer: [
    { x: 148, y: 372 },
    { x: 293, y: 196 },
    { x: 453, y: 110 },
    { x: 630, y: 260 },
    { x: 624, y: 548 },
    { x: 527, y: 660 },
    { x: 150, y: 636 },
  ],
  control: { x: 150, y: 115, width: 475, height: 540 },
  tracksVisit: true,
};

// Back row, left: carrots.
export const nutritionBed: LocationDefinition = {
  ...garden,
  id: "nutrition",
  name: "Nutrition app",
  dialogue: nutritionDialogue,
  footprints: [
    [
      { x: 686, y: 498 },
      { x: 1012, y: 525 },
      { x: 1063, y: 402 },
      { x: 715, y: 400 },
    ],
  ],
  depthY: 462,
  // On the path in front of the bed.
  interaction: { x: 850, y: 553 },
  hitArea: [
    { x: 684, y: 450 },
    { x: 700, y: 330 },
    { x: 760, y: 282 },
    { x: 1000, y: 285 },
    { x: 1066, y: 350 },
    { x: 1066, y: 405 },
    { x: 1014, y: 528 },
    { x: 684, y: 502 },
  ],
  layer: [
    { x: 682, y: 450 },
    { x: 698, y: 328 },
    { x: 758, y: 280 },
    { x: 1002, y: 283 },
    { x: 1068, y: 348 },
    { x: 1068, y: 406 },
    { x: 1015, y: 530 },
    { x: 682, y: 504 },
  ],
  control: { x: 686, y: 285, width: 378, height: 240 },
  tracksVisit: true,
};

// Back row, right: cherry tomatoes.
export const evergroundBed: LocationDefinition = {
  ...garden,
  id: "everground",
  name: "Everground",
  dialogue: evergroundDialogue,
  footprints: [
    [
      { x: 1095, y: 529 },
      { x: 1448, y: 554 },
      { x: 1472, y: 440 },
      { x: 1150, y: 430 },
    ],
  ],
  depthY: 492,
  interaction: { x: 1270, y: 582 },
  hitArea: [
    { x: 1092, y: 478 },
    { x: 1100, y: 415 },
    { x: 1128, y: 255 },
    { x: 1160, y: 225 },
    { x: 1405, y: 236 },
    { x: 1455, y: 318 },
    { x: 1476, y: 390 },
    { x: 1476, y: 442 },
    { x: 1452, y: 557 },
    { x: 1092, y: 533 },
  ],
  layer: [
    { x: 1090, y: 478 },
    { x: 1098, y: 415 },
    { x: 1126, y: 253 },
    { x: 1158, y: 223 },
    { x: 1407, y: 234 },
    { x: 1457, y: 316 },
    { x: 1478, y: 390 },
    { x: 1478, y: 442 },
    { x: 1453, y: 559 },
    { x: 1090, y: 535 },
  ],
  control: { x: 1095, y: 228, width: 378, height: 327 },
  tracksVisit: true,
};

// Front row, left: seedlings.
export const habitsBed: LocationDefinition = {
  ...garden,
  id: "habits",
  name: "Habits",
  dialogue: habitsDialogue,
  footprints: [
    [
      { x: 574, y: 719 },
      { x: 921, y: 747 },
      { x: 978, y: 600 },
      { x: 662, y: 582 },
    ],
  ],
  depthY: 665,
  interaction: { x: 750, y: 777 },
  hitArea: [
    { x: 570, y: 664 },
    { x: 654, y: 522 },
    { x: 976, y: 540 },
    { x: 982, y: 602 },
    { x: 924, y: 750 },
    { x: 570, y: 724 },
  ],
  layer: [
    { x: 568, y: 664 },
    { x: 653, y: 520 },
    { x: 978, y: 538 },
    { x: 984, y: 602 },
    { x: 925, y: 752 },
    { x: 568, y: 726 },
  ],
  control: { x: 572, y: 522, width: 406, height: 226 },
  tracksVisit: true,
};

// Front row, right: pumpkins.
export const tataiBed: LocationDefinition = {
  ...garden,
  id: "tatai",
  name: "Tatai",
  dialogue: tataiDialogue,
  footprints: [
    [
      { x: 1015, y: 763 },
      { x: 1434, y: 793 },
      { x: 1452, y: 640 },
      { x: 1078, y: 600 },
    ],
  ],
  depthY: 700,
  interaction: { x: 1220, y: 817 },
  hitArea: [
    { x: 1012, y: 700 },
    { x: 1068, y: 548 },
    { x: 1140, y: 537 },
    { x: 1240, y: 537 },
    { x: 1360, y: 556 },
    { x: 1452, y: 582 },
    { x: 1518, y: 640 },
    { x: 1518, y: 702 },
    { x: 1482, y: 728 },
    { x: 1437, y: 797 },
    { x: 1012, y: 768 },
  ],
  layer: [
    { x: 1010, y: 700 },
    { x: 1066, y: 546 },
    { x: 1140, y: 535 },
    { x: 1240, y: 535 },
    { x: 1360, y: 554 },
    { x: 1453, y: 580 },
    { x: 1520, y: 638 },
    { x: 1520, y: 704 },
    { x: 1484, y: 730 },
    { x: 1438, y: 799 },
    { x: 1010, y: 770 },
  ],
  control: { x: 1015, y: 540, width: 500, height: 255 },
  tracksVisit: true,
};

export const locations = [casita, beach, sprout, nutritionBed, evergroundBed, habitsBed, tataiBed];

// Illustrations drawn flat on the ground, under the player and every location.
export const grounds: Artwork[] = [garden];

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
