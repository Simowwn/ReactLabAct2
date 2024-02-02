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
          <li className="dropdown">
            <a className="dropbtn">PRODUCTS</a>
            <div className="dropdown-content">
              <a href="#">Moving Series</a>
              <a href="#">Exercising Series</a>
              <a href="#">Dressing Series</a>
              <a href="#">@Work</a>
              <a href="#">Museum</a>
              <a href="#">Cheer</a>
              <a href="#">Yoga Series</a>
              <a href="#">Bed</a>
              <a href="#">Living</a>
              <a href="#">Bath Series</a>
              <a href="#">Toilet Series</a>
              <a href="#">Series 4</a>
              <a href="#">Series 3</a>
              <a href="#">Series 2</a>
              <a href="#">Series 1</a>
              <a href="#">ZIPPERBITE SMISKI</a>
              <a href="#">Rainbomb SMISKI</a>
              <a href="#">Bobbing Head</a>
            </div>
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
