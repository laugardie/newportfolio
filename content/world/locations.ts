// Places in /world. Each location keeps its artwork placement, ground
// footprint, depth anchor and interaction point together.
//
// Shapes are measured in artwork pixels (open the image and read the
// coordinates off it); `resolveLocation` and `resolveProp` turn them into world units.

import type { Polygon, Vec } from "@/components/world/geometry";
import { beachDialogue, homeDialogue, sproutDialogue, type Dialogue } from "@/content/world/dialogues";

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

// The "Small bets" garden in the bottom-left corner: Sprout's greenhouse in
// the middle and a raised bed for each project on either side, all in one
// illustration. Sprout is the only one you talk to; the beds, the watering can
// and the cat are scenery (see `props`).
const garden: Artwork = {
  art: { src: "/world/garden.webp", width: 1024, height: 512 },
  position: { x: 40, y: 1240 },
  width: 1300,
};

const greenhouse: Polygon = [
  { x: 370, y: 418 },
  { x: 370, y: 256 },
  { x: 374, y: 113 },
  { x: 512, y: 17 },
  { x: 652, y: 113 },
  { x: 658, y: 256 },
  { x: 658, y: 418 },
];

export const sprout: LocationDefinition = {
  ...garden,
  id: "sprout",
  name: "Sprout",
  dialogue: sproutDialogue,
  footprints: [
    [
      { x: 372, y: 350 },
      { x: 655, y: 350 },
      { x: 655, y: 415 },
      { x: 372, y: 415 },
    ],
  ],
  depthY: 415,
  // On the sand in front of the door.
  interaction: { x: 512, y: 445 },
  hitArea: greenhouse,
  layer: greenhouse,
  control: { x: 370, y: 17, width: 288, height: 401 },
  tracksVisit: true,
};

export const locations = [casita, beach, sprout];

// Scenery the player walks around but can't focus or talk to. Like a location
// sharing an illustration, only its `layer` cut-out is drawn at its depth.
export type PropDefinition = Artwork & {
  id: string;
  footprints: Polygon[];
  depthY: number;
  layer: Polygon;
};

const bed = (id: string, box: Polygon, footprint: Polygon, depthY: number): PropDefinition => ({
  ...garden,
  id,
  footprints: [footprint],
  depthY,
  // Just the box: what grows above its rim lies flat, so it never cuts into the player.
  layer: box,
});

export const props: PropDefinition[] = [
  // Back row, left: carrots (the nutrition app).
  bed(
    "nutrition-bed",
    [
      { x: 97, y: 266 },
      { x: 107, y: 145 },
      { x: 336, y: 145 },
      { x: 333, y: 266 },
    ],
    [
      { x: 99, y: 264 },
      { x: 331, y: 266 },
      { x: 334, y: 190 },
      { x: 107, y: 188 },
    ],
    264,
  ),
  // Front row, left: seedlings (Habits).
  bed(
    "habits-bed",
    [
      { x: 82, y: 437 },
      { x: 95, y: 316 },
      { x: 326, y: 316 },
      { x: 320, y: 437 },
    ],
    [
      { x: 84, y: 434 },
      { x: 318, y: 435 },
      { x: 321, y: 360 },
      { x: 92, y: 358 },
    ],
    434,
  ),
  // Back row, right: cherry tomatoes (Everground).
  bed(
    "everground-bed",
    [
      { x: 693, y: 265 },
      { x: 692, y: 145 },
      { x: 922, y: 145 },
      { x: 934, y: 225 },
      { x: 930, y: 265 },
    ],
    [
      { x: 697, y: 263 },
      { x: 928, y: 263 },
      { x: 932, y: 190 },
      { x: 696, y: 188 },
    ],
    262,
  ),
  // Front row, right: pumpkins (Tatai).
  bed(
    "tatai-bed",
    [
      { x: 703, y: 438 },
      { x: 705, y: 317 },
      { x: 936, y: 317 },
      { x: 944, y: 438 },
    ],
    [
      { x: 705, y: 437 },
      { x: 943, y: 438 },
      { x: 938, y: 360 },
      { x: 705, y: 358 },
    ],
    436,
  ),
  {
    ...garden,
    id: "watering-can",
    footprints: [
      [
        { x: 860, y: 292 },
        { x: 935, y: 292 },
        { x: 935, y: 276 },
        { x: 860, y: 276 },
      ],
    ],
    depthY: 290,
    layer: [
      { x: 842, y: 262 },
      { x: 870, y: 237 },
      { x: 935, y: 240 },
      { x: 940, y: 290 },
      { x: 860, y: 292 },
    ],
  },
  {
    ...garden,
    id: "cat",
    footprints: [
      [
        { x: 748, y: 470 },
        { x: 835, y: 472 },
        { x: 838, y: 450 },
        { x: 748, y: 448 },
      ],
    ],
    depthY: 470,
    layer: [
      { x: 740, y: 465 },
      { x: 745, y: 430 },
      { x: 775, y: 415 },
      { x: 805, y: 418 },
      { x: 835, y: 430 },
      { x: 840, y: 462 },
      { x: 800, y: 476 },
    ],
  },
];

// Illustrations drawn flat on the ground, under the player and every location.
export const grounds: Artwork[] = [garden];

export type Location = LocationDefinition & {
  height: number;
  world: { footprints: Polygon[]; depthY: number; interaction: Vec; hitArea: Polygon };
};

const worldScale = (artwork: Artwork) => artwork.width / artwork.art.width;

const artToWorld = (artwork: Artwork) => (p: Vec) => ({
  x: artwork.position.x + p.x * worldScale(artwork),
  y: artwork.position.y + p.y * worldScale(artwork),
});

export function resolveLocation(location: LocationDefinition): Location {
  const toWorld = artToWorld(location);
  return {
    ...location,
    height: location.art.height * worldScale(location),
    world: {
      footprints: location.footprints.map((footprint) => footprint.map(toWorld)),
      depthY: toWorld({ x: 0, y: location.depthY }).y,
      interaction: toWorld(location.interaction),
      hitArea: location.hitArea.map(toWorld),
    },
  };
}

export type Prop = PropDefinition & { world: { footprints: Polygon[]; depthY: number } };

export function resolveProp(prop: PropDefinition): Prop {
  const toWorld = artToWorld(prop);
  return {
    ...prop,
    world: {
      footprints: prop.footprints.map((footprint) => footprint.map(toWorld)),
      depthY: toWorld({ x: 0, y: prop.depthY }).y,
    },
  };
}
