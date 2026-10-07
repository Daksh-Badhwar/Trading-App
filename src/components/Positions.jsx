const Positions = ({ positions }) => {
  return (
    <div className="card positions-card">
      <div className="card-header">
        <div>
          <h3>Open Positions</h3>
          <p>Your current simulated positions</p>
        </div>
      </div>

      {positions.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">＋</div>

          <h4>No open positions</h4>

          <p>
            Your positions will appear here after placing
            an order.
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
                <th>Entry</th>
              </tr>
            </thead>

            <tbody>
              {positions.map((position) => (
                <tr key={position.id}>
                  <td>
                    <strong>{position.symbol}</strong>
                  </td>

                  <td>
                    <span
                      className={
                        position.side === "BUY"
                          ? "table-buy"
                          : "table-sell"
                      }
                    >
                      {position.side}
                    </span>
                  </td>

                  <td>{position.quantity}</td>

                  <td>
                    {position.price.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Positions;