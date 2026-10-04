# ReactJS Props - Reusable Card Components

## Task 26 - ReactJS Props

This project demonstrates the use of React Props by creating a reusable Card component.

## Features

- Reusable Card component
- Data passed using React Props
- 12 cards generated from an array of objects
- Image, title, and description for each card
- Gradient borders
- Different border colors on hover
- Responsive design

## Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Vite

## How It Works

The card information is stored in an array of objects.

Each object is passed to the reusable Card component using props.

Example:

```jsx
<Card
  title={card.title}
  description={card.description}
  image={card.image}
/>