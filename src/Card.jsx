import "./styles/Card.css"
import addCartImg from "./assets/cart-plus.svg"

function Card({id, title, imageURL, price, cart, addToCart}) {

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
                    <button className="card-btn" data-id={id} onClick={() => {addToCart(id)}}>
                        <img src={addCartImg} data-id={id} className="add-cart" />
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Card