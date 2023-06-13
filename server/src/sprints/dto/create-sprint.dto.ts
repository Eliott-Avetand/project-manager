import { Card } from "src/cards/entities/card.entity";

export class CreateSprintDto {
    title: string;
    startDate: Date;
    endDate: Date;
    cards: Card[];
}
