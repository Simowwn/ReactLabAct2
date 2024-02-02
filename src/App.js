import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar.js";
import MiniNav from "./MiniNav.js";
import Heading from "./Heading.js";
import Footer from "./Footer.js";
import Collections from "./Collections.js";
import { collectiblesData } from "./Data.js";
import Series from "./Series.js";
import Info from "./Info.js";
import LastSec from "./LastSec.js";

export default function App() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <Navbar></Navbar>
      <MiniNav></MiniNav>
      <Heading></Heading>
      <div className="mainDiv">
        {collectiblesData.map((collectibles) => (
          <div key={collectibles.name}>
            <Collections collectiblesObj={collectibles} />
          </div>
        ))}
      </div>
      <Info></Info>
      <LastSec></LastSec>
      <Series></Series>
      <Footer></Footer>
    </div>
  );
}
