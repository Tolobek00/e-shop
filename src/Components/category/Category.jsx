import React from "react";
import ManCategory from "../../Assets/man.png";
import WomanCategory from "../../Assets/woman.png";
import KidCategory from "../../Assets/kid.png";

import "./category.scss";
const categories = [
  {
    title: "Men",
    imageUrl: ManCategory,
  },
  {
    title: "Women",
    imageUrl: WomanCategory,
  },
  {
    title: "Kids",
    imageUrl: KidCategory,
  },
];

const Category = () => {
  return (
    <div className="container category">
      {categories.map((category, index) => (
        <div key={index}>
          <img src={category.imageUrl} alt="" />
          <div>
            <h3>{category.title}</h3>
            <p>View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
