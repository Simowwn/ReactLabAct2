function Footer() {
  return (
    <footer className="row">
      <div>
        <h6 className="footer-cr">© 2016 Dreams Inc.</h6>
      </div>
      <div>
        <ul className="row-ullinks">
          <li>
            <i
              className="fab fa-facebook-square"
              style={{ color: "#4267B2", fontSize: "24px" }}
            ></i>
          </li>
          <li>
            <i
              class="fa-brands fa-square-x-twitter"
              style={{ color: "#1F1F1F", fontSize: "24px" }}
            ></i>
          </li>
          <li>
            <i
              class="fa-brands fa-youtube"
              style={{ color: "#FF0000", fontSize: "24px" }}
            ></i>
          </li>
          <li>
            <i
              class="fa-brands fa-square-instagram"
              style={{
                color:
                  "linear-gradient(#45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
                fontSize: "24px",
              }}
            ></i>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
