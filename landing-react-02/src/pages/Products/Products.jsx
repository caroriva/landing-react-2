import "./Products.css";
import {
  SiBitcoin,
  SiEthereum,
  SiSolana,
  SiRipple,
  SiPolkadot,
  SiTether,
} from "react-icons/si";
import { Link } from "react-router-dom";

function Products() {
  return (
    <section className="products" id="products">
      <h2>buy your crypto</h2>
      <div className="product__container wrapper">
        <div className="product__card">
          <SiBitcoin className="product__icon" />
          <h3>Bitcoin</h3>
          <span>$57229</span>
          <a href="#" className="btn">
            Buy It Now
          </a>
        </div>
        <div className="product__card">
          <SiEthereum className="product__icon" />
          <h3>Ethereum</h3>
          <span>$3023</span>
          <a href="#" className="btn">
            Buy It Now
          </a>
        </div>
        <div className="product__card">
          <SiRipple className="product__icon" />
          <h3>Ripple</h3>
          <span>$13,9</span>
          <a href="#" className="btn">
            Buy It Now
          </a>
        </div>
      </div>
      <div className="product__container wrapper">
        <div className="product__card">
          <SiSolana className="product__icon" />
          <h3>Solana</h3>
          <span>$5923</span>
          <a href="#" className="btn">
            Buy It Now
          </a>
        </div>
        <div className="product__card">
          <SiTether className="product__icon" />
          <h3>Tether</h3>
          <span>$235</span>
          <a href="#" className="btn">
            Buy It Now
          </a>
        </div>
        <div className="product__card">
          <SiPolkadot className="product__icon" />
          <h3>Polkadot</h3>
          <span>$39,7</span>
          <a href="#" className="btn">
            Buy It Now
          </a>
        </div>
      </div>
      <div className="more__btn">
        <Link to="/" className="btn alt__btn">
          SEE MORE
        </Link>
      </div>
    </section>
  );
}

export default Products;
