export interface Card {
    id: number;
    first_name: string;
    last_name: string;
    age: number;
    email: string;
    country: string;
    image: string;
    profession: string;
    favorite: {
        color: string;
        song: string;
    }
}