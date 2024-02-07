// models/Book.ts

export default interface Book {
    id?: number;
    title: string;
    author: string;
    price: number;
    rating: number;
    tags: string[]
}

