import "./styles/Navbar.css"
import logoImg from "./assets/cart-logo.png"
import { Link } from "react-router"

function Navbar() {

  return (
    <>
      <div className="top-bar">
        <div className="bar-wrapper">
          <div className="logo-wrapper">
            <img src={logoImg} className="cart-logo" />
            <p className="text-logo">ShoppyShop</p>
          </div>
          <nav className="nav-bar">
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to="../shop">Shop</Link>
            <Link className="nav-item" to="../cart">Cart</Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar