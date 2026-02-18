import "./styles/Navbar.css"
import { useState } from "react"
import logoImg from "./assets/cart-logo.png"
import menuImg from "./assets/menu.svg"
import { Link } from "react-router"

function Navbar({selected, cart}) {

  const cartQtt = cart.reduce((a, b) => a + parseInt(b.qtt), 0)
  
  const [responsive, setResponsive] = useState(false)

  return (
    <>
      <div className="top-bar">
        <div className="bar-wrapper">
          <div className="logo-wrapper">
            <img src={logoImg} className="cart-logo" />
            <p className="text-logo">ShoppyShop</p>
          </div>
          <nav className={`nav-bar ${responsive && "responsive"}`}>
            <Link className={`nav-item ${selected == 1 && "nav-selected"}`} to="/">Home</Link>
            <Link className={`nav-item ${selected == 2 && "nav-selected"}`} to="../shop">Shop</Link>
            <Link className={`nav-item ${selected == 3 && "nav-selected"}`} to="../cart">Cart {
              cartQtt > 0 && <p className="cart-qtt">{cartQtt}</p>
            }</Link>
            <div className="nav-menu" onClick={() => setResponsive(!responsive)}>
              <img src={menuImg} className="menu-icon" />
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar