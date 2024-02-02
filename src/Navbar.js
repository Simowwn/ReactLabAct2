function Navbar() {
  return (
    <nav className="row">
      <div>
        <h1>
          <img
            src="https://smiski.com/e/wp-content/uploads/2016/03/top_logo.png"
            alt=""
          />
        </h1>
      </div>
      <div className="nav-links">
        <ul className="row-ullinks">
          <li>
            <a href="#">NEWS</a>
          </li>
          <li>
            <a href="#">SMISKI</a>
          </li>
          <li>
            <a href="#">PRODUCTS</a>
          </li>
          <li>
            <a href="#">WHERE TO BUY</a>
          </li>
          <li>
            <a href="#">日本語</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
