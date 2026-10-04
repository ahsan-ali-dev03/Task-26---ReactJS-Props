import Card from "./card";
import "./App.css";

const cards = [
  {
    id: 1,
    title: "Card 1",
    description: "This is card 1 description",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=400",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is card 2 description",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is card 3 description",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is card 4 description",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is card 5 description",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
  },
  {
    id: 6,
    title: "Card 6",
    description: "This is card 6 description",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
  },
  {
    id: 7,
    title: "Card 7",
    description: "This is card 7 description",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=400",
  },
  {
    id: 8,
    title: "Card 8",
    description: "This is card 8 description",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=400",
  },
  {
    id: 9,
    title: "Card 9",
    description: "This is card 9 description",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400",
  },
  {
    id: 10,
    title: "Card 10",
    description: "This is card 10 description",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=400",
  },
  {
    id: 11,
    title: "Card 11",
    description: "This is card 11 description",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400",
  },
  {
    id: 12,
    title: "Card 12",
    description: "This is card 12 description",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400",
  },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>All the cards are here.</h1>
        <p>Reusable Card Components</p>
      </header>

      <main className="card-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </main>
    </div>
  );
}

export default App;