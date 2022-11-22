import "./style.css";
import { data } from "../../allData/data";

const Watches = () => {
  return (
    <div className="watch-container">
      {data.map((item) => {
        return (
          <div className="card">
            <div className="img-box">
              <img src={item.itemURL} alt="watch" />
            </div>
            <div className="content-box">
              <h3>{item.brandName} watch</h3>
              <h2 className="price">{item.price} &#1423;</h2>
              <a href="#" className="add-cart">
                Add to cart
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Watches;
