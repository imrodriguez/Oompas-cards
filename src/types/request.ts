import { Card } from "./card";

export interface RequestCards {
    current: number;
    total: number;
    results: Card[];
}