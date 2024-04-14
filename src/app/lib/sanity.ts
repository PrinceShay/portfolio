import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    apiVersion: '2022-03-07',
    dataset: 'production',
    projectId: 'mr2f38x6',
    useCdn: false
});

const builder = ImageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source);
}