import { useState } from "react";

const OrderPanel=({ market, onTrade })=> {
  const [side, setSide] = useState("BUY");
  const [quantity, setQuantity] = useState("1");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const quantityNumber = Number(quantity);

  const orderValue = quantityNumber > 0
    ? quantityNumber * market.price
    : 0;

  const handleSubmit = () => {
    setMessage(null);

    if (!quantity || quantityNumber <= 0) {
      setMessage({
        type: "error",
        text: "Please enter a valid quantity.",
      });

      return;
    }

    if (quantityNumber > 1000000) {
      setMessage({
        type: "error",
        text: "Quantity is too large.",
      });

      return;
    }

    setLoading(true);

    setTimeout(() => {
      const trade = {
        id: Date.now(),
        symbol: market.symbol,
        side,
        quantity: quantityNumber,
        price: market.price,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: "Executed",
      };

      onTrade(trade);

      setMessage({
        type: "success",
        text: `${side} order executed successfully.`,
      });

      setLoading(false);
    }, 700);
  };

  return (
    <div className="card order-card">
      <div className="card-header">
        <div>
          <h3>Place Order</h3>
          <p>Execute a simulated trade</p>
        </div>

        <span className="demo-label">DEMO</span>
      </div>

      <div className="selected-symbol">
        <div>
          <span>Instrument</span>
          <strong>{market.symbol}</strong>
        </div>

        <div className="current-price">
          <span>Current Price</span>
          <strong>
            {market.price.toFixed(market.decimals)}
          </strong>
        </div>
      </div>

      <div className="side-buttons">
        <button
          className={side === "BUY" ? "buy active-side" : "buy"}
          onClick={() => setSide("BUY")}
        >
          BUY
        </button>

        <button
          className={side === "SELL" ? "sell active-side" : "sell"}
          onClick={() => setSide("SELL")}
        >
          SELL
        </button>
      </div>

      <div className="form-group">
        <label>Quantity</label>

        <input
          type="number"
          min="0"
          step="0.01"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter quantity"
        />
      </div>

      <div className="order-summary">
        <div>
          <span>Order Type</span>
          <strong>Market</strong>
        </div>

        <div>
          <span>Side</span>
          <strong className={side === "BUY" ? "buy-text" : "sell-text"}>
            {side}
          </strong>
        </div>

        <div>
          <span>Price</span>
          <strong>
            {market.price.toFixed(market.decimals)}
          </strong>
        </div>

        <div>
          <span>Order Value</span>
          <strong>
            ${orderValue.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </strong>
        </div>
      </div>

      {message && (
        <div
          className={
            message.type === "success"
              ? "message success-message"
              : "message error-message"
          }
        >
          {message.type === "success" ? "✓" : "!"}{" "}
          {message.text}
        </div>
      )}

      <button
        className={`execute-button ${
          side === "BUY" ? "execute-buy" : "execute-sell"
        }`}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading
          ? "Processing..."
          : `${side} ${market.symbol}`}
      </button>

      <p className="order-note">
        This is a simulated trading environment. No real
        orders are placed.
      </p>
    </div>
  );
}

export default OrderPanel;