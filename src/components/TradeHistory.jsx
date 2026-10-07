const TradeHistory=({ trades })=> {
  return (
    <div className="card history-card">
      <div className="card-header">
        <div>
          <h3>Trade History</h3>
          <p>Recently executed orders</p>
        </div>

        <span className="trade-count">
          {trades.length} Trades
        </span>
      </div>

      {trades.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">↕</div>

          <h4>No trades yet</h4>

          <p>
            Your executed trades will appear here.
          </p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Side</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {trades.map((trade) => (
                <tr key={trade.id}>
                  <td>
                    <strong>{trade.symbol}</strong>
                  </td>

                  <td>
                    <span
                      className={
                        trade.side === "BUY"
                          ? "table-buy"
                          : "table-sell"
                      }
                    >
                      {trade.side}
                    </span>
                  </td>

                  <td>{trade.quantity}</td>

                  <td>{trade.price.toFixed(2)}</td>

                  <td>{trade.time}</td>

                  <td>
                    <span className="status-success">
                      ● {trade.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TradeHistory;