import { fireEvent, render, screen } from "@testing-library/react";
import { CardsProvider } from "../../context/cards";
import { Card } from "./Card";

test("Card should display", async () => {
  render(
    <CardsProvider cards={[]}>
      <Card
        id={1}
        age={12}
        favoriteSong={{
          color: "ssa",
          song: "dss",
        }}
        fullName="fasd"
        image={{
          alt: "sads",
          src: "sasa",
        }}
        profession="Developer"
      />
    </CardsProvider>
  );

  const card = await screen.findByTestId("card");

  expect(card).toBeVisible();
});

test("Card can be selected", async () => {
  render(
    <CardsProvider cards={[]}>
      <Card
        id={1}
        age={12}
        favoriteSong={{
          color: "ssa",
          song: "dss",
        }}
        fullName="fasd"
        image={{
          alt: "sads",
          src: "sasa",
        }}
        profession="Developer"
      />
    </CardsProvider>
  );

  const card = await screen.findByTestId("card");
  const button = await screen.findByRole("button");

  fireEvent.click(button);

  expect(button).toHaveTextContent("Desactivate");

  expect(card).toBeVisible();
});
