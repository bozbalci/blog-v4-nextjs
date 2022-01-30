import fs from "fs";
import { join } from "path";

export const WIKIS_PATH = join(process.cwd(), "content", "wiki");

export function getAllWikiSlugs() {
  return fs.readdirSync(WIKIS_PATH).filter((path) => /\.mdx?$/.test(path));
}

// We cannot place other Wiki-related utilities here.
// https://github.com/hashicorp/next-mdx-remote
//
// IMPORTANT: Be very careful about putting any mdx-remote code into a separate "utilities" file.
// Doing so will likely cause issues with nextjs' code splitting abilities - it must be able to
// cleanly determine what is used only on the server side and what should be left in the client
// bundle. If you put mdx-remote code into an external utilities file and something is broken,
// remove it and start from the simple example above before filing an issue.
//
// See /pages/wiki/[slug].js
