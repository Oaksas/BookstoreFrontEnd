// models/Book.ts

export interface User {
    id?: number;
    username: string;
    password: string;
    points: number;

}

export interface UserLogin {
    username: string;
    password: string;
}
