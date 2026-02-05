import "./styles/Shop.css";
import Navbar from "./Navbar";
import Card from "./Card";
//import { useEffect, useState } from "react";

function Shop({ data, cart, addToCart, editCart, plusMinusCart }) {
  const itemList = data.map((element) => {
    return (
      <Card
        id={element.id}
        key={element.id}
        title={element.title}
        imageURL={element.image}
        price={element.price}
        cart={cart}
        addToCart={addToCart}
        editCart={editCart}
        plusMinusCart={plusMinusCart}
      />
    );
  });

  return (
    <>
      <Navbar />
      <div className="card-container">
        {itemList}
      </div>
    </>
  );
}

export default Shop;
