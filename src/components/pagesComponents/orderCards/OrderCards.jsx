import React from "react";
import "./orderCards.css";

const OrderCards = (props) => {
  const order = props.order;
  const orderArr = Object.entries(order).filter(
    ([_key, value]) => value !== null
  );

  const objectParse = (obj) => {
    if (typeof obj === "object") {
      const objArr = Object.entries(obj).filter(
        ([_key, value]) => value !== null
      );
      return objArr.map(([key, value], index) => {
        return (
          <div key={index} className="orderCards__content">
            <i>{key}:</i>
            {value}
          </div>
        );
      });
    }
  };

  return (
    <div className="orderCards">
      {orderArr.map(([key, value], index) => {
        const currentValue =
          typeof value === "string" || typeof value === "number"
            ? value
            : objectParse(value);
        return (
          <div key={index} className="orderCards__content">
            <i>{key}:</i>
            {currentValue}
          </div>
        );
      })}
    </div>
  );
};

export default OrderCards;
