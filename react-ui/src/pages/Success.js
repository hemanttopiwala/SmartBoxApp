
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethod";
import {Link} from "react-router-dom";
import axios from 'axios';
const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  //const data = location.state.stripeData;
  const cart=useSelector(state=>state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const temp = user && JSON.parse(user).currentUser;
  const TOKEN = temp?.accessToken;
  

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: "Thapar University",
        },{
          headers:{
            token:`Bearer ${TOKEN}`,
          }
            
        });
        setOrderId(res.data._id);
      } catch {}
    };
    createOrder();
  }, [cart, TOKEN,currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Link to='/'>
      
      <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      </Link>
    </div>
  );
};

export default Success;