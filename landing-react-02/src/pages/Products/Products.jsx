import "./Products.css";
import Icon1 from "../../assets/icon-1.png";
import Icon2 from "../../assets/icon-2.png";
import Icon3 from "../../assets/icon-3.png";
import { Link } from "react-router-dom";

function Products() {
  return (
    <section className="products" id="products">
      <h2>buy your crypto</h2>
      <div className="product__container wrapper">
        <div className="product__card">
          <img src={Icon1} alt="bitcoin" />
          <h3>Bitcoin</h3>
          <span>$57229</span>
          <a href="#" className="btn">
            Buy It Now
          </a>
        </div>
        <div className="product__card">
          <img src={Icon2} alt="ethereum" />
          <h3>Ethereum</h3>
          <span>$3023</span>
          <a href="#" className="btn">
            Buy It Now
          </a>
        </div>
        <div className="product__card">
          <img src={Icon3} alt="ripple" />
          <h3>Ripple</h3>
          <span>$13,9</span>
          <a href="#" className="btn">
            Buy It Now
          </a>
        </div>
      </div>
      <div className="product__container wrapper">
        <div className="product__card">
          <img src={Icon1} alt="solana" />
          <h3>Solana</h3>
          <span>$5923</span>
          <a href="#" className="btn">
            Buy It Now
          </a>
        </div>
        <div className="product__card">
          <img src={Icon2} alt="dai" />
          <h3>DAI</h3>
          <span>$235</span>
          <a href="#" className="btn">
            Buy It Now
          </a>
        </div>
        <div className="product__card">
          <img src={Icon3} alt="polkadot" />
          <h3>Polkadot</h3>
          <span>$39,7</span>
          <a href="#" className="btn">
            Buy It Now
          </a>
        </div>
      </div>
      <div className="more__btn">
        <Link to="/" className="btn">
          SEE MORE
        </Link>
      </div>
    </section>
  );
}

export default Products;
