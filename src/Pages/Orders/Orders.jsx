import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
// import { use } from "react";
import classes from "./Orders.module.css";
import ProductCard from "../../Components/Product/ProductCard";

function Orders() {
  const [{ user, }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []); // Also consider adding user to the dependency array

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>

          {orders?.length == 0 && <div style={{ padding: "20px" }}> you don't have orders yet.</div>}
          {/* ordered items */}
          <div>
            {orders?.map((eachOrder, i) => (
              <div key={eachOrder.id}>
                <hr />
                <p>Order Id: {eachOrder?.id}</p>
                {eachOrder?.data?.basket?.map((order,index) => (
                  <ProductCard flex={true} product={order} key={order.id ||index} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;