export type Article = {
    title: string;
    content: string;
    thumbnail: string;
    category_id: string; // UUID
    is_published: boolean;
    id: string; // UUID
    author_id: string; // UUID
    read_time: number;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
};