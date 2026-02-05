import "./styles/Shop.css";
import Navbar from "./Navbar";
import Card from "./Card";
import { useEffect, useState } from "react";


function Shop({ data, cart, addToCart }) {
  const itemList = data.map((element) => {
    return (
      <Card
        id={element.id}
        title={element.title}
        imageURL={element.image}
        price={element.price}
        cart={cart}
        addToCart={addToCart}
        key={element.id}
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
