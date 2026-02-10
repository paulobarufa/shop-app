import PlusMinusInput from "./PlusMinusInput.jsx"
import deleteImg from "./assets/delete.svg"
import "./styles/CartCard.css"

function CartCard({id, cart, editCart, plusMinusCart, removeFromCart, image, title, price, description}) {

    const shortDescription = description.length > 150 ? description.substring(0, 150) + "..." : description

    return (
        <div className="cart-card">
            <div className="left-wrapper">
                <img className="cart-card-img" src={image} />
                <div className="product-text-wrapper">
                    <p className="product-title">{title}</p>
                    <p className="product-description">{shortDescription}</p>
                </div>
            </div>
            <div className="right-wrapper">
                <div className="right-top-row">
                    <p className="product-price">{new Intl.NumberFormat(
                        "en-GB", { style: "currency", currency: "GBP" }
                    ).format(price)}</p>
                </div>
                <div className="right-bot-row">
                    <button className="del-btn" data-id={id} onClick={() => {removeFromCart(id)}}>
                        <img src={deleteImg} data-id={id} className="del-cart" />
                    </button>
                    <PlusMinusInput id={id} cart={cart} editCart={editCart} plusMinusCart={plusMinusCart} />
                </div>
            </div>
        </div>

    )
}

export default CartCard