import React from "react";
import { FaHeadset, FaLock, FaShippingFast, FaTag } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import "./infoSection.scss"

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="icon1 icon" />,
      title: "Free Shopping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaHeadset className="icon1 icon" />,
      title: "Support 24/7",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaMoneyBill1Wave className="icon1 icon" />,
      title: "100% Money Back",
      description: "Full refund if youare not satisfied",
    },
    {
      icon: <FaLock className="icon1" />,
      title: "Payment Secure",
      description: "Your payment iformation is safe with us",
    },
    {
      icon: <FaTag className="icon1" />,
      title: "Discount",
      description: "Enjoy the best prices on our products",
    },
  ];
  return (
    <div className="infoSection container">
      <div>
        {infoItems.map((item, index) => (
          <div key={index} className="item">
            <section>{item.icon}</section>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
