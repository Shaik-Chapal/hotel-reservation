import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./Checkout.css";

const Checkout = () => {
  const { cart, orders, addItemToOrderList, clearCart } =
    useContext(GlobalContext);

  // Dummy data for discount, extra fees, and tax
  const { discount, extraFees, tax } = { discount: 20, extraFees: 99, tax: 5 };

  // Calculating subTotal, total, and initializing state for address and delivery date
  const subTotal = Math.floor(cart?.reduce((sum, curr) => sum + curr.price, 0));
  const total = Math.floor(subTotal + extraFees + tax - (subTotal + extraFees + tax) * (discount / 100));
  const [isOrdered, setIsOrdered] = useState(true);
  const [address, setAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  // Function to handle payment
  const handlePay = () => {
    addItemToOrderList({
      orderId: orders.length + 1,
      buyerId: 1,
      items: [...cart],
      price: total,
      address: address,
      deliveryDate: deliveryDate,
      isDelivered: false,
    });
    clearCart();
    //setIsOrdered(true);
    window.location.href = '/';
  };

  return (
    <div className="checkout-container">
          <div>
            {/* Order Review */}
            <div className="custom-row">
              <h4>Order Review</h4>
              <span> items in cart</span>
            </div>

            {/* Coupons */}
            <div className="custom-row">
              <h4>Coupons</h4>
              <span>Not Available</span>
            </div>

            {/* Checkout Summary */}
            <div className="custom-row">
              <h4>Checkout Summary</h4>
              <div className="checkout-summary">
                <span>Subtotal</span>
                <span>${subTotal}</span>
              </div>
              <div className="checkout-summary">
                <span>Discount</span>
                <span>{discount}%</span>
              </div>
              <div className="checkout-summary">
                <span>Extra Fee</span>
                <span>${extraFees}</span>
              </div>
              <div className="checkout-summary">
                <span>Tax</span>
                <span>${tax}</span>
              </div>
            </div>

            {/* Total */}
            <div className="custom-row">
              <h4>Total</h4>
              <span>${total}</span>
            </div>

            {/* Address Input */}
            <div className="custom-row">
              <h4>Address</h4>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
              />
            </div>

            {/* Delivery Date Selection */}
            <div className="custom-row">
              <h4>Delivery Date</h4>
              <input
                type="date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
            </div>
          </div>

    
          <button className="item-btn" onClick={handlePay}>
            Pay ${total}
          </button>
    </div>
  );
};

export default Checkout;
