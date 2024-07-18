import "./Footer.css";
import Logo from "../../assets/Logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container wrapper">
        <div className="footer__col">
          <img src={Logo} alt="logo" />
        </div>
        <div className="footer__col">
          <h3>About</h3>
          <a href="#">about us</a>
          <a href="#">features</a>
          <a href="#">news</a>
        </div>
        <div className="footer__col">
          <h3>Company</h3>
          <a href="#">Cryptocode</a>
          <a href="#">Security</a>
          <a href="#">Rankings</a>
        </div>
        <div className="footer__col">
          <h3>Support</h3>
          <a href="#">FAQs</a>
          <a href="#">Support</a>
          <a href="#">Contact us</a>
        </div>
        <div className="footer__col">
          <h3>Socials</h3>
          <div className="footer__icons">
            <a href="#" className="footer__icon">
              <FaFacebookF />
            </a>
            <a href="#" className="footer__icon">
              <FaInstagram />
            </a>
            <a href="#" className="footer__icon">
              <FaTwitter />
            </a>
            <a href="#" className="footer__icon">
              <FaLinkedinIn />
            </a>
            <a href="#" className="footer__icon">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
