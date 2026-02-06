import "./styles/Card.css"
import addCartImg from "./assets/cart-plus.svg"
import PlusMinusInput from "./PlusMinusInput"

function Card({id, title, imageURL, price, cart, addToCart, editCart, plusMinusCart}) {

    return (
        <div className="card" data-id={id}>
            <div className="img-wrapper">
                <img className="card-img" src={imageURL} />
            </div>
            <p className="card-title">{title}</p>
            <div className="bottom-row">
                <p className="card-price">{new Intl.NumberFormat(
                    "en-GB", { style: "currency", currency: "GBP" }
                ).format(price)}</p>
                <div className="btn-row-wrapper">
                    {cart.some((item) => item.id == id) ? (
                        <PlusMinusInput id={id} cart={cart} editCart={editCart} plusMinusCart={plusMinusCart} />
                    ) : ( 
                        <button className="card-btn" data-id={id} onClick={() => {addToCart(id)}}>
                            <img src={addCartImg} data-id={id} className="add-cart" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card