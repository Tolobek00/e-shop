import React, { useState } from "react";
import emptyCart from "../../Assets/emptycart.png";

import { useDispatch, useSelector } from "react-redux";
import { FaTrash, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/CartSlice";

import Address from "../Address/Address";
import Modal from "../Modal/Modal";
import "./cart.scss";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("main street, 0012");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="cart_container-empty container">
      {cart.products.length > 0 ? (
        <div className="cart_inside">
          <h3 className="title-cart">SHOPPING CART</h3>
          <div className="container_in-cart">
            <div className="cart-left_item">
              <div className="cart_titles">
                <p>PRODUCT</p>
                <div>
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div className="cart_products">
                {cart.products.map((product) => (
                  <div className="cart_product">
                    <div className="product_images">
                      <div className="for_img_container">
                        <img src={product.image} alt="" />
                      </div>
                      <h3>{product.name}</h3>
                    </div>
                    <div className="product_prices">
                      <p>${product.price}</p>
                      <div className="quantity">
                        <button
                          onClick={() => dispatch(decreaseQuantity(product.id))}
                        >
                          -
                        </button>
                        <p>{product.quantity}</p>
                        <button
                          onClick={() => dispatch(increaseQuantity(product.id))}
                        >
                          +
                        </button>
                      </div>
                      <p>${(product.quantity * product.price).toFixed(2)}</p>
                      <button
                        className="delete_btn"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="subtotal_container">
              <h3 className="total_title">CART TOTALS</h3>
              <div className="total_items">
                <span>Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="shipping">
                <p className="shipping_title">Shipping:</p>
                <span>
                  <p>Shipping to</p>
                  {address}
                </span>
                <button onClick={() => setIsModalOpen(true)}>
                  Change Address
                </button>
              </div>
              <div className="total-price">
                <span>Total Price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button
                className="proced_btn"
                onClick={() => navigate("/checkout")}
              >
                Proced to checkout
              </button>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <Address
              setAddress={setAddress}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="empty-cart">
          <img src={emptyCart} alt="" />
          <Link to={"/shop"} className="btn">
            Go To Shop
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
