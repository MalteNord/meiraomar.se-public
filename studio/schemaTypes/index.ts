import type { SchemaTypeDefinition } from "sanity";
import contactPerson from "./contactPerson";
import contactSettings from "./contactSettings";
import contactSubmission from "./contactSubmission";
import heroSettings from "./heroSettings";
import shopItem from "./shopItem";
import showDate from "./showDate";
import showsSettings from "./showsSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroSettings,
    showsSettings,
    contactSettings,
    contactPerson,
    contactSubmission,
    showDate,
    shopItem,
  ],
};
