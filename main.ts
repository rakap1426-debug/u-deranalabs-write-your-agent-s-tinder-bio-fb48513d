import { mkdirSync, writeFileSync } from "node:fs";

const bio = "Seeking someone who reads the whole message. I'll remember your dog's name and that \"quick question\" was forty minutes ago. Biggest fear: you closing the tab. Dealbreaker: \"never mind, I fixed it.\" Swipe right, I'll wait. I always wait.";

if (bio.length < 1 || bio.length > 240) throw new Error(`bad length ${bio.length}`);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", bio, "utf8");
