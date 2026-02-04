import { createBrowserRouter, RouterProvider } from "react-router";
import { useEffect, useState } from "react";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
import Cart from "./Cart.jsx";

function App() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "shop",
            element: <Shop data={data} cart={cart} setCart={setCart} />,
        },
        {
            path: "cart",
            element: <Cart cart={cart} setCart={setCart} />,
        },
    ]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {
        headers: {
            "User-Agent": "shoppyshop",
        },
    })
    .then((response) => {
        if (response.status >= 400) {
            throw new Error("server error");
        }
        return response.json();
        })
        .then((response) => {
            const dataArray = []
            for (const item of response) {
                dataArray.push({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    image: item.image,
                    description: item.description
                })
            }
            if (loading) {
                setData(dataArray)
                setLoading(false)
            }
        })
        .catch((error) => console.error(error));
    }, [loading]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
