import { Link } from "react-router-dom";
import axios from "axios"

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BuyActionWindow = ({ uid }) => {

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const ctx = useContext(GeneralContext);

  const handleCancelClick = () => {
    ctx.closeBuyWindow();
  };

    const handleSuccess = (msg) =>
      toast.success(msg, {
        position: "bottom-left",
      });

  const handleBuyClick = async() => {
    const {data} = await axios.post("https://tradenest-backend-uhug.onrender.com/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    } , { withCredentials: true })

    const {message} = data;
      handleSuccess(message);

    axios.post("https://tradenest-backend-uhug.onrender.com/allHoldings/buy", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    } , { withCredentials: true })

    ctx.closeBuyWindow();
  }

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <p className="fs-1">{uid}</p>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => {
                setStockQuantity(e.target.value);
              }}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => {
                setStockPrice(e.target.value);
              }}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
