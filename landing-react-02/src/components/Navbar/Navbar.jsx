import Logo from "../../assets/Logo.png";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Navbar() {
  const [showNav, setshowNav] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar__container wrapper">
        <a href="#" className="navbar__logo" onClick={() => setshowNav(false)}>
          <img src={Logo} alt="logo" />
        </a>
        <ul className={`${showNav ? "show" : ""}`}>
          <li>
            <a href="#">company</a>
          </li>
          <li>
            <a href="#products">cryptos</a>
          </li>
          <li>
            <a href="#">contact us</a>
          </li>
        </ul>
        <div className="navbar__btns">
          <a href="#">login</a>
          <a href="#" className="btn">
            register
          </a>
        </div>
        <div className="navbar__menu" onClick={() => setshowNav(!showNav)}>
          {showNav ? <IoMdClose /> : <IoMenu />}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
