import { useEffect, useState } from "react";

import Header from "./components/Header";
import MarketList from "./components/MarketList";

import OrderPanel from "./components/OrderPanel";
import AccountSummary from "./components/AccountSummary";
import Positions from "./components/Positions";
import TradeHistory from "./components/TradeHistory";

import {
  initialMarketData,
  generateNewPrice,
} from "./data/marketData";

function App() {
  const [markets, setMarkets] = useState(initialMarketData);

  const [selectedSymbol, setSelectedSymbol] =
    useState("BTC/USD");

  const [trades, setTrades] = useState([]);

  const [balance, setBalance] =
    useState(100000);

  const [positions, setPositions] =
    useState([]);

  /*
    Automatically update market prices
    every 1 second.
  */
  useEffect(() => {
    const interval = setInterval(() => {
      setMarkets((currentMarkets) =>
        currentMarkets.map((market) => {
          const updatedMarket =
            generateNewPrice(market);

          const priceDifference =
            updatedMarket.price - market.price;

          const percentage =
            (priceDifference / market.price) * 100;

          return {
            ...updatedMarket,
            change:
              market.change + percentage,
          };
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);
 /* find returns whole object*/
  const selectedMarket = markets.find(
    (market) =>
      market.symbol === selectedSymbol
  );

  /*
    Called after successful order execution.
  */
  const handleTrade = (trade) => {
    setTrades((currentTrades) => [
      trade,
      ...currentTrades,
    ]);

    /*
      Update demo balance.
       subtract the order value for buy
       add it for SELL.
    */
    const orderValue =
      trade.quantity * trade.price;

    if (trade.side === "BUY") {
      setBalance(
        (currentBalance) =>
          currentBalance - orderValue
      );
    } else {
      setBalance(
        (currentBalance) =>
          currentBalance + orderValue
      );
    }

    /*
      Create a position.
    */
    const newPosition = {
      id: trade.id,
      symbol: trade.symbol,
      side: trade.side,
      quantity: trade.quantity,
      price: trade.price,
      pnl: 0,
    };

    setPositions((currentPositions) => [
      newPosition,
      ...currentPositions,
    ]);
  };

  return (
    <div className="app">
      <Header />

      <main className="main-container">

        {/* Page heading */}
        <section className="page-heading">
          <div>
            <h1>Trading Dashboard</h1>

            <p>
              Monitor markets and manage your
              simulated trades.
            </p>
          </div>

          <div className="market-status">
            <span className="online-dot"></span>

            <div>
              <strong>Market Connected</strong>
              <span>Prices updating automatically</span>
            </div>
          </div>
        </section>

        {/* Main dashboard */}
        <section className="dashboard-grid">

          {/* Left */}
          <div className="left-column">
            <MarketList
              markets={markets}
              selectedSymbol={selectedSymbol}
              onSelect={setSelectedSymbol}
            />
          </div>

          
          

          {/* Right */}
          <div className="right-column">
            <OrderPanel
              market={selectedMarket}
              onTrade={handleTrade}
            />
          </div>

        </section>

        {/* Account summary */}
        <section className="section">
          <div className="section-title">
            <h2>Account Overview</h2>
          </div>

          <AccountSummary
            balance={balance}
            positions={positions}
          />
        </section>

        {/* Positions */}
        <section className="section">
          <Positions
            positions={positions}
          />
        </section>

        {/* History */}
        <section className="section">
          <TradeHistory
            trades={trades}
          />
        </section>

      </main>
    </div>
  );
}

export default App;