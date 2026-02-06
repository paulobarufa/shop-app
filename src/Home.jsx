import "./styles/Home.css"
import Navbar from "./Navbar"

function Home({cart}) {

  return (
    <>
      <Navbar selected={1} cart={cart} />
      <p>Home screen</p>
    </>
  )
}

export default Home