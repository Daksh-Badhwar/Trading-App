function MarketList({ markets, selectedSymbol, onSelect }) {
  return (
    <div className="card market-card">
      <div className="card-header">
        <div>
          <h3>Markets</h3>
          <p>Live simulated prices</p>
        </div>

        <span className="live-badge">
          <span></span>
          LIVE
        </span>
      </div>

      <div className="market-list">
        {markets.map((market) => {
          const isSelected = market.symbol === selectedSymbol;

          return (
            <button
              key={market.symbol}
              className={`market-item ${
                isSelected ? "market-selected" : ""
              }`}
              onClick={() => onSelect(market.symbol)}
            >
              <div className="market-left">
                <div className="market-icon">
                  {market.symbol.substring(0, 1)}
                </div>

                <div>
                  <strong>{market.symbol}</strong>
                  <span>{market.name}</span>
                </div>
              </div>

              <div className="market-right">
                <strong>
                  {market.price.toFixed(market.decimals)}
                </strong>

                <span
                  className={
                    market.change >= 0
                      ? "price-up"
                      : "price-down"
                  }
                >
                  {market.change >= 0 ? "+" : ""}
                  {market.change.toFixed(2)}%
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default MarketList;