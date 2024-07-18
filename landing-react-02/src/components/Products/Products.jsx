import "./Products.css";
import Icon1 from "../../assets/icon-1.png";
import Icon2 from "../../assets/icon-2.png";
import Icon3 from "../../assets/icon-3.png";

function Products() {
  return (
    <section className="products" id="products">
      <h2>Our Cryptos</h2>
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
      <div className="more__btn">
        <a href="#" className="btn">
          SEE MORE
        </a>
      </div>
    </section>
  );
}

export default Products;
