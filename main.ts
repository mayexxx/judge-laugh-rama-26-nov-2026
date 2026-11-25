import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const text = "My coworker asked if I could help with a quick five-minute task, which is corporate speak for \"cancel your afternoon and prepare to weep.\"";
const expected = `${text}\n`;

const characterCount = Array.from(text).length;
if (characterCount < 1 || characterCount > 200 || /[\r\n\u2028\u2029]/.test(text)) {
  throw new Error("Entry must be a single line of 1 to 200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", expected, "utf8");
if (!readFileSync("/output/entry.txt").equals(Buffer.from(expected, "utf8"))) {
  throw new Error("Written entry does not match the expected bytes");
}
