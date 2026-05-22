import { useState, useEffect } from "react";
// import { positions } from "../data/data";
import axios from "axios";
import Loading from "./Loading";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [isVerify, setIsVerify] = useState(false);

  useEffect(() => {
    axios.get("https://tradenest-backend-uhug.onrender.com/allPositions" , {withCredentials: true}).then((res) => {
      console.log(res.data);
      setAllPositions(res.data);
      setIsVerify(true);
    })
    .catch((err) => {
      console.log("Error fetching positions", err);
    });
  }, []);

  if(!isVerify){
    return <Loading/>
  }

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&amp;L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const pnl = curValue - stock.avg * stock.qty;
              const profClass = pnl >= 0 ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
