import React from "react";
import { Grid } from "./components/Grid";
import { CardsProvider } from "./context/cards";
import { Card } from "./types/card";
import { RequestCards } from "./types/request";

function App() {
  const [cards, setCards] = React.useState<Card[]>([]);

  const getCards = async () => {
    const response = await fetch(
      "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=1"
    );
    const data: RequestCards = await response.json();
    setCards(data.results);
  };

  React.useEffect(() => {
    getCards();
  }, []);

  if (cards.length <= 0) {
    return <div>Loading...</div>;
  }

  return (
    <CardsProvider cards={cards}>
      <div className="App">
        <Grid cards={cards} />
      </div>
    </CardsProvider>
  );
}

export default App;
