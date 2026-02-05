import "./styles/Cart.css"
import Navbar from "./Navbar"

function Cart({cart, setCart}) {

  return (
    <>
      <Navbar selected={3} />
      <p>Cart screen</p>
    </>
  )
}

export default Cart