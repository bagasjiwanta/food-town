import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: 'rgvj7v4s',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})

