import plusImg from "./assets/plus.svg"
import minusImg from "./assets/minus.svg"
import QttInput from "./QttInput"

function PlusMinusInput({id, cart, editCart, plusMinusCart}) {

    return (
        <>
            <button className="plusminus-btn" data-id={id} onClick={() => {plusMinusCart(id, -1)}}>
                <img src={minusImg} data-id={id} className="plusminus-cart" />
            </button>
            <QttInput id={id} cart={cart} qtt={cart.find((item) => item.id === id).qtt} onChange={editCart}/>
            <button className="plusminus-btn" data-id={id} onClick={() => {plusMinusCart(id, 1)}}>
                <img src={plusImg} data-id={id} className="plusminus-cart" />
            </button>
        </>
    )
}

export default PlusMinusInput