const AccountSummary = ({ balance, positions }) => {
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
          {balance.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </strong>

        <small>Current account value</small>
      </div>

      <div className="summary-card">
        <span>Open Positions</span>

        <strong>{positions.length}</strong>

        <small>Active positions</small>
      </div>

    </div>
  );
};

export default AccountSummary;
