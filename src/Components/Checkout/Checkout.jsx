import React, { useState } from "react";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./checkout.scss";
import { useSelector } from "react-redux";

const Checkout = () => {
  const navigate = useNavigate();
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const cart = useSelector((state) => state.cart);

  return (
    <div className="checkout_container-empty container">
      <h3 className="title-cart">Checkout</h3>
      <div className="cart_inside">
        <div className="checkout_left">
          <div className="cart-left_item">
            <div
              onClick={() => setBillingToggle(!billingToggle)}
              className="billinig_dropdown"
            >
              <h3>Billing Information</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            {billingToggle && (
              <div className="billing-info">
                <div>
                  <section>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Name" />
                  </section>
                </div>
                <div>
                  <section>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter Email" />
                  </section>
                </div>
                <div>
                  <section>
                    <label htmlFor="">Phone</label>
                    <input type="text" placeholder="Enter Phone #" />
                  </section>
                </div>
              </div>
            )}
          </div>
          {/* SHIPPING */}
          <div className="cart-left_item">
            <div
              onClick={() => setShippingToggle(!shippingToggle)}
              className="billinig_dropdown"
            >
              <h3>Shipping Information</h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            {shippingToggle && (
              <div className="billing-info">
                <div>
                  <section>
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder="Enter Address" />
                  </section>
                </div>
                <div>
                  <section>
                    <label htmlFor="">City</label>
                    <input type="email" placeholder="Enter City Name" />
                  </section>
                </div>
                <div>
                  <section>
                    <label htmlFor="">Zip Code</label>
                    <input type="text" placeholder="Enter Zip Code " />
                  </section>
                </div>
              </div>
            )}
          </div>
          {/* PAYMENT METHOD */}
          <div className="cart-left_item">
            <div
              onClick={() => setPaymentToggle(!paymentToggle)}
              className="billinig_dropdown"
            >
              <h3>Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            {paymentToggle && (
              <div className="billing-info">
                <div className="payment_method">
                  <section>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                    />
                    <label htmlFor="">Cash on Delivery</label>
                  </section>
                  <section>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "dc"}
                      onChange={() => setPaymentMethod("dc")}
                    />
                    <label htmlFor="">Debit Card</label>
                  </section>
                </div>
                {paymentMethod === "dc" && (
                  <div className="debit_payment">
                    <h3>Debit Card Information</h3>
                    <div className="card_Info">
                      <label htmlFor="">Card Number</label>
                      <input type="text" placeholder="Enter Card Number" />
                    </div>
                    <div className="card_Info">
                      <label htmlFor="">Card Holder Name</label>
                      <input type="text" placeholder="Enter Card Holder Name" />
                    </div>
                    <div className="date_cvv">
                      <div>
                        <label htmlFor="">Expiry Date</label>
                        <input type="text" placeholder="MM/YY" />
                      </div>
                      <div>
                        <label htmlFor="">CVV</label>
                        <input type="text" placeholder="CVV" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="subtotal_container">
          <h3>Order Sumary</h3>
          <div className="order-sumary">
            {cart.products.map((product) => (
              <div key={product.id} className="order-item">
                <div className="inside-order">
                  <div className="product_img">
                    <img src={product.image} alt="" />
                  </div>
                  <div>
                    <h4>{product.name}</h4>
                    <p>
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="total-item">
                  ${product.price.toFixed(2) * product.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="total-price">
            <div>
              <span>Total Price:</span>
              <span>${cart.totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
