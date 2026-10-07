# Trading App

A simple trading dashboard made using React.

## Live Demo

https://tradingappproject.netlify.app/

## Source Code

https://github.com/Daksh-Badhwar/Trading-App

## Features

- Shows market prices
- Buy and Sell trades
- Balance and equity
- Positions
- Profit/Loss
- Trade history
- Responsive UI

## Technologies

- React
- JavaScript
- HTML
- CSS
- Vite

## Setup

git clone https://github.com/Daksh-Badhwar/Trading-App.git
npm install
npm run dev
## Market Data

The project uses **simulated market data**. There is no live API.

The prices change automatically on the frontend to look like a real market and to show how buying and selling works.

Explaination:
The market feed is simulated on the frontend using React state and JavaScript. The application starts with predefined market data containing symbols, names, prices, and percentage changes. A setInterval runs every 1 second to update all market prices automatically. For each market, the generateNewPrice() function uses Math.random() to create a small random movement, which can make the price go either up or down. The new price is calculated based on the previous price and this random movement. The application also determines whether the price moved up or down and updates the market data in React state. When the state changes, React re-renders the market components and displays the updated prices. Therefore, it gives a real-time market-feed experience without using an external market API.

## Note

This is only a demo project. No real money or real trades are involved.
