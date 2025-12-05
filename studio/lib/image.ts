import createImageUrlBuilder, { type SanityImageSource } from "@sanity/image-url";

import { dataset, projectId } from "../env";

if (!projectId || !dataset) {
  throw new Error("Missing projectId or dataset in environment variables");
}

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
