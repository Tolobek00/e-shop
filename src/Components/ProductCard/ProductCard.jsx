import React from "react";
import { FaStar } from "react-icons/fa";
import "./productCard.scss";
import { addToCart } from "../../redux/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    toast.success("Product added succesully!");
  };
  return (
    <div className="container productCard">
      <div className="img-container">
        <img src={product.image} alt="" />
      </div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div className="stars">
        <div>
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="star" />
          ))}
        </div>
        <div onClick={(e) => handleAddToCart(e, product)}>
          <span>+</span>
          <span>Add to Cart</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
