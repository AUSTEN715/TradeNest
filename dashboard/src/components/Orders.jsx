import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVerify, setIsVerify] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/allOrders", {withCredentials: true})
    .then((res) => {
      setAllOrders(res.data);
      setIsVerify(true);
    })
    .catch((err) => {
      console.log("Error fetching orders", err);
    });
  }, []);

  if(!isVerify){
    return <Loading/>
  }
  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>

          <tbody>
            {allOrders.map((stock, index) => {
              const modeClass = stock.mode === "BUY" ? "profit" : "loss";

              return (
                <tr
                  key={stock._id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="order-row"
                >
                  <td className="order-cell">{stock.name}</td>

                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                  <td className={modeClass}>{stock.mode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};


export default Orders;
