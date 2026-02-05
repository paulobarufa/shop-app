import "./styles/Card.css"
import { useState } from "react"
import QttInput from "./QttInput"
import addCartImg from "./assets/cart-plus.svg"
import plusImg from "./assets/plus.svg"
import minusImg from "./assets/minus.svg"

function Card({id, title, imageURL, price, cart, addToCart, editCart, plusMinusCart}) {

    //const [qtt, setQtt] = useState(cart.some((item) => item.id == id) ? cart.find((item) => item.id === id).qtt : 0)

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
                        <>
                        <button className="plusminus-btn" data-id={id} onClick={() => {plusMinusCart(id, -1)}}>
                            <img src={minusImg} data-id={id} className="plusminus-cart" />
                        </button>
                        <QttInput id={id} cart={cart} qtt={cart.find((item) => item.id === id).qtt} onChange={editCart}/>
                        <button className="plusminus-btn" data-id={id} onClick={() => {plusMinusCart(id, 1)}}>
                            <img src={plusImg} data-id={id} className="plusminus-cart" />
                        </button>
                        </>
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