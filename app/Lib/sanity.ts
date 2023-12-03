import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "goe0dzqz",
  dataset: "production",
  apiVersion: "2023-12-02",
  useCdn: true,
});

const Builders = ImageUrlBuilder(client);

export function urlFor(source: any) {
  return Builders.image(source);
}
