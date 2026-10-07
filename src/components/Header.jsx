const Header=props=>{
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">T</div>

        <div>
          <h2>TradePro</h2>
          <span>Trading Terminal</span>
        </div>
      </div>

      <nav className="desktop-nav">
        <a className="active">Dashboard</a>
        <a>Markets</a>
        <a>Portfolio</a>
        <a>History</a>
      </nav>

      <div className="header-right">
        <div className="connection">
          <span className="online-dot"></span>
          Market Open
        </div>

        <div className="profile">
          <div className="avatar">DB</div>

          <div className="profile-info">
            <strong>Daksh</strong>
            <span>Demo Account</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;