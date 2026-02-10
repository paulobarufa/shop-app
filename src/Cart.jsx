import "./styles/Cart.css";
import Navbar from "./Navbar";
import CartCard from "./CartCard.jsx";

function Cart({ cart, editCart, plusMinusCart, removeFromCart }) {
  const cartQtt = cart.reduce((a, b) => a + parseInt(b.qtt), 0);
  const cartTotal = cart.reduce((a, b) => a + parseFloat(b.price * b.qtt), 0)

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

  const cartTotalList = cart.map((item) => {
    return (
      <>
        <p className="cart-total-item">{item.title}</p>
        <p className="cart-total-price">{`${item.qtt}x ${new Intl.NumberFormat(
                    "en-GB", { style: "currency", currency: "GBP" }
                ).format(item.price)}`}</p>
      </>
    );
  });

  return (
    <>
      <Navbar selected={3} cart={cart} />
      <div className="cart-content">
        <div className="cart-item-list">
          {cartQtt ? <>{cartList}</> : <p className="empty-cart">Your cart is empty!</p>}
        </div>
        {
          cartQtt ? (
          <div className="cart-total">
            <h2 className="cart-title">Cart total:</h2>
            <hr />
            {cartTotalList}
            <hr />
            <h3 className="cart-total-value">{new Intl.NumberFormat(
                      "en-GB", { style: "currency", currency: "GBP" }
                  ).format(cartTotal)}</h3>
          </div>
          ) : <></>
        }
      </div>
    </>
  );
}

export default Cart;
