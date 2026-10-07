export const initialMarketData = [
  {
    symbol: "EUR/USD",
    name: "Euro / US Dollar",
    price: 1.08452,
    change: 0.32,
    decimals: 5,
  },
  {
    symbol: "GBP/USD",
    name: "British Pound / US Dollar",
    price: 1.27183,
    change: 0.18,
    decimals: 5,
  },
  {
    symbol: "USD/JPY",
    name: "US Dollar / Japanese Yen",
    price: 149.254,
    change: -0.21,
    decimals: 3,
  },
  {
    symbol: "BTC/USD",
    name: "Bitcoin / US Dollar",
    price: 67842.5,
    change: 1.24,
    decimals: 2,
  },
  {
    symbol: "XAU/USD",
    name: "Gold / US Dollar",
    price: 2654.3,
    change: 0.47,
    decimals: 2,
  },
  {
    symbol: "ETH/USD",
    name: "Ethereum / US Dollar",
    price: 2648.72,
    change: -0.35,
    decimals: 2,
  },
];

export function generateNewPrice(item) {
  const movement = (Math.random() - 0.5) * 0.001;

  let newPrice = item.price + item.price * movement;

  if (newPrice <= 0) {
    newPrice = item.price;
  }

  const oldPrice = item.price;

  const direction =
    newPrice > oldPrice
      ? "up"
      : newPrice < oldPrice
      ? "down"
      : "same";

  return {
    ...item,
    price: newPrice,
    direction,
  };
}