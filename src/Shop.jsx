import "./styles/Shop.css";
import Navbar from "./Navbar";
import Card from "./Card";
import FilterInput from "./FilterInput";
import { useState } from "react";
import filterImg from "./assets/filter.svg"

function Shop({ data, cart, addToCart, editCart, plusMinusCart }) {

  const [show, setShow] = useState(false)

  const [catList, setCatList] = useState({
    mens: true,
    jewelry: true,
    electronics: true,
    womens: true,
  })

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    setCatList((prevOptions) => ({
      ...prevOptions,
      [name]: !prevOptions[name],
    }));
    console.log(catList)
  };

  const itemList = data.filter((element) => (catList.mens && element.category == "men's clothing") 
    || catList.jewelry && element.category == "jewelery"
    || catList.electronics && element.category == "electronics"
    || catList.womens && element.category == "women's clothing"
  ).map((element) => {
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
      <Navbar selected={2} cart={cart} />
      <div className="shop-wrapper">
        <div className="filter-btn" onClick={() => setShow(!show)}>
          <img src={filterImg} className="filter-icon" />
          Filters
        </div>
        <div className={`filter-bar ${show && "show"}`}>
          <h2 className="filter-title">Filters</h2>
          <FilterInput name="mens" title="Men's clothing" state={catList.mens} onChange={handleCheckboxChange}/>
          <FilterInput name="jewelry" title="Jewelry" state={catList.jewelry} onChange={handleCheckboxChange}/>
          <FilterInput name="electronics" title="Electronics" state={catList.electronics} onChange={handleCheckboxChange}/>
          <FilterInput name="womens" title="Women's clothing" state={catList.womens} onChange={handleCheckboxChange}/>
        </div>
        <div className="card-container">
          {itemList}
        </div>
      </div>
      
    </>
  );
}

export default Shop;
