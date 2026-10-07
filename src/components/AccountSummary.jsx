const AccountSummary=({ balance, positions })=> {
  const totalPnL = positions.reduce(
    (total, position) => total + position.pnl,
    0
  );

  const equity = balance + totalPnL;

  return (
    <div className="summary-grid">
      <div className="summary-card">
        <span>Available Balance</span>
        <strong>
          $
          {balance.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </strong>
        <small>Demo account</small>
      </div>

      <div className="summary-card">
        <span>Equity</span>
        <strong>
          $
          {equity.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </strong>
        <small>Balance + unrealised P&L</small>
      </div>

      <div className="summary-card">
        <span>Unrealised P&L</span>

        <strong className={totalPnL >= 0 ? "price-up" : "price-down"}>
          {totalPnL >= 0 ? "+" : ""}
          $
          {totalPnL.toFixed(2)}
        </strong>

        <small>Current open positions</small>
      </div>

      <div className="summary-card">
        <span>Open Positions</span>
        <strong>{positions.length}</strong>
        <small>Active positions</small>
      </div>
    </div>
  );
}

export default AccountSummary;