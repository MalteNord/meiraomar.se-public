import path from "node:path";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import type { UserConfig } from "vite";
import { deleteAllContactSubmissions } from "./studio/actions/deleteAllContactSubmissions";
import { schema } from "./studio/schemaTypes";

const projectId = "otinr2pj";
const dataset = "production";

export default defineConfig({
  name: "default",
  title: "meiraomar.se",

  projectId,
  dataset,

  basePath: "/studio",

  plugins: [structureTool(), visionTool()],

  schema,

  document: {
    actions: (prev, _context) => {
      // Add the custom action to all documents
      return [...prev, deleteAllContactSubmissions];
    },
  },

  vite: (prev: UserConfig) => ({
    ...prev,
    css: {
      ...prev.css,
      postcss: path.resolve(__dirname, "studio/postcss.config.mjs"),
    },
  }),
});
