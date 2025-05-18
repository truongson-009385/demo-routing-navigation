import { Blog } from "@/types";

export const blogs: Blog[] = [
    ...Array.from({ length: 10000 }, (_, i) => ({
        id: i + 1,
        title: `Blog ${i + Math.floor(Math.random() * 100)}`,
        content: `Content for blog ${i + 1}.`,
    })),
];