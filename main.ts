import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Roast: The Gadget You Use Every Day — entry for
// u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.
// One line, 116 characters: a smart kettle that demands a firmware
// update before doing the one job it exists for — boiling water.
// The sting is the thirst: the user waits while the kettle "learns"
// the skill it was bought with.
// Chosen over 6 drafted candidates in a head-to-head against the
// judge's 5 criteria: the rating-popup and phone-battery lines lost
// on freshness (the kit's own examples name those exact complaints),
// the laptop-fan line is the oldest cliché in the book, the Roomba
// line's cable-eating core is a familiar joke, and the TV-remote
// line landed as a mild grumble rather than a sting.
const LINE =
  "My smart kettle needs a firmware update before it will boil water, so I stand there thirsty while it learns to boil.";

if ([...LINE].length < 1 || [...LINE].length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${[...LINE].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
