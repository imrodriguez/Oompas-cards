import React from "react";
import { Card } from "../Card";
import { Card as CardType } from "../../types/card";
import "./Grid.css";
import { useCards } from "../../context/cards";

interface GridProps {
  cards: CardType[];
}

export const Grid = ({ cards }: GridProps) => {
  const { state, getCard } = useCards();

  return (
    <div>
      <p>active Oompas</p>
      {state.selectedCards.length > 0 && (
        <ul>
          {state.selectedCards.map((cardId) => (
            <li key={cardId}>{getCard(cardId)?.first_name}</li>
          ))}
        </ul>
      )}
      <div className="grid" data-testid="grid">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              fullName={`${card.first_name} ${card.last_name}`}
              profession={card.profession}
              age={card.age}
              image={{
                src: card.image,
                alt: `${card.first_name} ${card.last_name}`,
              }}
              favoriteSong={card.favorite}
            />
          );
        })}
      </div>
    </div>
  );
};
