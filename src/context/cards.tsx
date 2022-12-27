import React from "react";
import { Card } from "../types/card";

type Action =
  | { type: "add"; payload: number }
  | { type: "remove"; payload: number };
type Dispatch = (action: Action) => void;
type State = { selectedCards: number[]; cards: Card[] };
type CardProviderProps = { children: React.ReactNode; cards: Card[] };

const CardsContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function cardsReducer(state: State, action: Action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        selectedCards: [...state.selectedCards, action.payload],
      };
    case "remove":
      const newSelected = state.selectedCards;
      const position = newSelected.indexOf(action.payload);

      if (position !== -1) {
        newSelected.splice(position, 1);
      }
      return { ...state, selectedCards: newSelected };
    default: {
      throw new Error(`Unhandled action type: `);
    }
  }
}

function CardsProvider({ children, cards }: CardProviderProps) {
  const [state, dispatch] = React.useReducer(cardsReducer, {
    selectedCards: [],
    cards,
  });

  const value = { state, dispatch };
  return (
    <CardsContext.Provider value={value}>{children}</CardsContext.Provider>
  );
}

function useCards() {
  const context = React.useContext(CardsContext);
  if (context === undefined) {
    throw new Error("useCards must be used within a CardsProvider");
  }

  const getCard = (id: number) => {
    const findCard = context.state.cards.find((card) => card.id === id);

    return findCard || null;
  };

  const isSelected = (id: number) => {
    const selected = context.state.selectedCards.indexOf(id);

    if (selected === -1) {
      return false;
    }
    return true;
  };

  return { ...context, getCard, isSelected };
}

export { CardsProvider, useCards };
