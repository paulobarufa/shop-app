import "./styles/Shop.css";
import Navbar from "./Navbar";
import Card from "./Card";
import { useEffect, useState } from "react";


function Shop({ data, cart, setCart }) {
  const itemList = data.map((element) => {
    return (
      <Card
        id={element.id}
        title={element.title}
        imageURL={element.image}
        price={element.price}
        cart={cart}
        setCart={setCart}
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
