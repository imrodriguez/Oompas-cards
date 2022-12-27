import React from "react";
import { Button } from "../Button";
import { Card as CardType } from "../../types/card";
import "./Card.css";
import { useCards } from "../../context/cards";

interface CardProps {
  id: number;
  fullName: string;
  profession: string;
  age: number;
  favoriteSong: CardType["favorite"];
  image: {
    src: string;
    alt: string;
  };
  testid?: string;
}

export const Card = ({
  id,
  fullName,
  profession,
  age,
  favoriteSong,
  image,
}: CardProps) => {
  const { dispatch, isSelected } = useCards();
  const selected = isSelected(id);

  return (
    <div className={`card ${selected && "selected"}`} data-testid="card">
      <p>Full Name: {fullName}</p>
      <p>Profession: {profession}</p>
      <p>Age: {age}</p>
      <p className="ellipsis">Favorite Song: {favoriteSong.song}</p>

      <img src={image.src} alt={image.alt} />
      <Button
        title={selected ? "Desactivate" : "Activate"}
        action={() => {
          return selected
            ? dispatch({
                type: "remove",
                payload: id,
              })
            : dispatch({
                type: "add",
                payload: id,
              });
        }}
      />
    </div>
  );
};
