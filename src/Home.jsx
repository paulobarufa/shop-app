import "./styles/Home.css"
import Navbar from "./Navbar"
import { Link } from "react-router"
import homeStoreImg from "./assets/home-store.jpg"

function Home({cart}) {

  return (
    <>
      <Navbar selected={1} cart={cart} />
      <div className="home-content">
        <div className="home-img-container">
          <img src={homeStoreImg} />
        </div>
        <p className="home-welcome">Welcome to Shoppy Shop!</p>
        <p>Browse from an array of seemingly random items as provided by the FakeStore API. 
          If the extremely diverse selection of clothing is not to your liking, maybe the random electronics are?
          Or if you aren't in to gadgets, you can always browse our jewelry. We really are a poor man's Temu.
        </p>
        <Link className="home-shop-btn" to="../shop">Browse items</Link>
      </div>
    </>
  )
}

export default Home