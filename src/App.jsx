import { createBrowserRouter, RouterProvider } from "react-router";
import { useEffect, useState } from "react";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
import Cart from "./Cart.jsx";

function App() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [cart, setCart] = useState(new Array);

    const getItem = (id) => {
        return data.find((item) => item.id === id)
    }

    const addToCart = (id) => {
        const item = {
            ...getItem(id),
            qtt: 1
        }
        setCart([...cart, item])
    }

    const editCart = (id, qtt) => {
        if (qtt < 1) {
            removeFromCart(id)
        } else {
            setCart(cart.map(item => item.id == id ? {...item, qtt: qtt} : item))
        }
    }

    const plusMinusCart = (id, qtt) => {
        const itemQtt = cart.find((item) => item.id === id).qtt
        if ((itemQtt + qtt) < 1) {
            removeFromCart(id)
        } else {
            setCart(cart.map(item => item.id == id ? {...item, qtt: parseInt(item.qtt) + parseInt(qtt)} : item))
        }
    }

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

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
                    description: item.description,
                    category: item.category
                })
            }
            if (loading) {
                setData(dataArray)
                setLoading(false)
            }
        })
        .catch((error) => console.error(error));
    }, [loading]);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home cart={cart} />,
        },
        {
            path: "shop",
            element: <Shop 
                data={data} 
                cart={cart} 
                addToCart={addToCart} 
                editCart={editCart} 
                plusMinusCart={plusMinusCart} />,
        },
        {
            path: "cart",
            element: <Cart 
                cart={cart} 
                editCart={editCart} 
                plusMinusCart={plusMinusCart} 
                removeFromCart={removeFromCart} />,
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
