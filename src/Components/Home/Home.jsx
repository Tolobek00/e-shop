import React, { useEffect } from "react";
import { Categories, mockData } from "../../mockData";
import hero_png from "../../Assets/hero-page.png";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import "./home.scss";
import InfoSection from "../InfoSection/InfoSection";
import Category from "../category/Category";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/productSlice";
import ProductCard from "../ProductCard/ProductCard";
import Shop from "../Shop/Shop";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);
  return (
    <main>
      <div className="main_container container">
        <div className="shop_container">
          <div>
            <div>SHOP BY CATEGORIES</div>
          </div>
          <div>
            <ul>
              {Categories.map((category, index) => (
                <li key={index}>
                  <div>
                    <RiCheckboxBlankCircleLine className="circle" />
                  </div>
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="hero_banner">
          <img src={hero_png} alt="" />
          <div className="texts">
            <p>Code With Yourself</p>
            <h2>WELCOME TO E-SHOP</h2>
            <h3>MILLIONS+ PRODUCTS</h3>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
      <InfoSection />
      <Category />

      <div
        style={{ margin: "0 auto", textAlign: "center" }}
        className="container"
      >
        <h2
          style={{
            padding: "20px 0",
            height: "80px",
            fontSize: "40px",
            fontWeight: "700",
          }}
        >
          Top Products
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {products.products.slice(0, 5).map((product, index) => (
            <div key={index} style={{ width: "19%" }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <Shop/>
    </main>
  );
};

export default Home;
