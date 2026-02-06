import "./styles/Cart.css";
import Navbar from "./Navbar";
import CartCard from "./CartCard.jsx";

function Cart({ cart, editCart, plusMinusCart, removeFromCart }) {
  const cartQtt = cart.reduce((a, b) => a + parseInt(b.qtt), 0);
  //const cartTotal = cart.reduce((a, b) => a + parseFloat(b.price * b.qtt), 0)

  const cartList = cart.map((item) => {
    return (
      <>
      <CartCard
        id={item.id}
        key={`cart${item.id}`}
        cart={cart}
        editCart={editCart}
        plusMinusCart={plusMinusCart}
        removeFromCart={removeFromCart}
        image={item.image}
        title={item.title}
        price={item.price}
        description={item.description}
      /></>
    );
  });

  return (
    <>
      <Navbar selected={3} cart={cart} />
      <div className="cart-content">
        {cartQtt ? <>{cartList}</> : <p>Your cart is empty!</p>}
      </div>
    </>
  );
}

export default Cart;
