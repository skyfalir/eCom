import React, { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MyContext } from "../../App";
import { useNavigate } from 'react-router-dom';
import "./cart.css";

function Cart() {
  const { cartProducts } = useContext(MyContext);
  const navigate = useNavigate()
  // console.log(cartProducts)

  let value = cartProducts.length;
  return (
    <div className="cart"
    onClick={() => navigate(`/checkoutPage`)}
    // onClick={() => setCount((prevCount) => prevCount + 1)}
    >
      <span className="counter">{value}</span>
      <FaCartShopping size={20} color="white" />
    </div>
 );
}

export default Cart;